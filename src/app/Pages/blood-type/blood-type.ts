import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Request } from '../../Modles/request';
import { BloodType } from '../../Services/blood-type';
import { NotificationService } from '../../Services/notifications';

type ComponentType = 'rbc' | 'wbc' | 'plasma' | 'platelets';

interface BloodComponentOption {
  id: ComponentType;
  title: string;
  description: string;
  uses: string[];
  color: string;
}

@Component({
  selector: 'app-blood-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './blood-type.html',
  styleUrl: './blood-type.css'
})
export class BloodRequestComponent {
  constructor(private bloodTypeService: BloodType, private notification: NotificationService) {}
  private readonly fb = inject(FormBuilder);

  readonly options: BloodComponentOption[] = [
    { id: 'rbc', title: 'Red Blood Cells', description: 'Essential for oxygen transport throughout the body', uses: ['Anemia', 'Blood loss', 'Surgery'], color: '#e74c3c' },
    { id: 'wbc', title: 'White Blood Cells', description: 'Help fight infections and boost immune system', uses: ['Cancer treatment', 'Immune deficiencies'], color: '#9b59b6' },
    { id: 'plasma', title: 'Plasma', description: 'Contains proteins essential for blood clotting', uses: ['Burns', 'Liver disease', 'Bleeding disorders'], color: '#f1c40f' },
    { id: 'platelets', title: 'Platelets', description: 'Critical for blood clotting and wound healing', uses: ['Cancer treatment', 'Surgery', 'Bleeding disorders'], color: '#3498db' }
  ];

  readonly selected = signal<ComponentType>('plasma');
  readonly urgencyLevels = ['Low', 'Normal', 'High', 'Critical'];

  readonly baseForm = this.fb.group({
    fullName: ['', Validators.required],
    phone: ['', Validators.required],
    hospital: ['', Validators.required],
    requiredDate: ['', Validators.required],
    urgency: ['', Validators.required]
  });

  readonly dynamicForm: FormGroup = this.fb.group({
    units: new FormControl<number | null>(null, { validators: [Validators.required] }),
    notes: ['']
  });

  readonly titleForForm = computed(() => this.options.find(o => o.id === this.selected())?.title ?? '');

  select(type: ComponentType) {
    this.selected.set(type);
  }

  submit() {
    if (this.baseForm.invalid || this.dynamicForm.invalid) {
      this.baseForm.markAllAsTouched();
      this.dynamicForm.markAllAsTouched();
      return;
    }

    const payload = {
      componentType: this.selected(),
      name: this.baseForm.value.fullName,
      phoneNumber: this.baseForm.value.phone,
      address: this.baseForm.value.hospital,
      requiredDate: this.baseForm.value.requiredDate,
      urgencyLevel: this.baseForm.value.urgency,
      unitsNeeded: this.dynamicForm.value.units,
      notes: this.dynamicForm.value.notes
    };

    this.bloodTypeService.postSeparatedBloodRequest(payload).subscribe({
      next: (response: Request) => {
        console.log('✅ Blood component request sent successfully:', response);
        alert('Request submitted successfully!');
        this.baseForm.reset();
        this.dynamicForm.reset();
      },
      error: (err) => {
        console.error('Error sending request:', err);
        alert('Failed to submit request. Please try again.');
      },
      complete: () => this.notification.show('Your Request Have Been Sent', "Your Request Is Under Review!!")
    });
  }
}
