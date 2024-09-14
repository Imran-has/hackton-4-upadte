// hack.ts
interface FormData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
  }
  
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
  const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
  
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    const formData: FormData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      education: (document.getElementById('education') as HTMLTextAreaElement).value,
      workExperience: (document.getElementById('workExperience') as HTMLTextAreaElement).value,
      skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
      append: function (name: string, value: string | Blob): void {
        throw new Error("Function not implemented.");
      },
      delete: function (name: string): void {
        throw new Error("Function not implemented.");
      },
      get: function (name: string): FormDataEntryValue | null {
        throw new Error("Function not implemented.");
      },
      getAll: function (name: string): FormDataEntryValue[] {
        throw new Error("Function not implemented.");
      },
      has: function (name: string): boolean {
        throw new Error("Function not implemented.");
      },
      set: function (name: string, value: string | Blob): void {
        throw new Error("Function not implemented.");
      },
      forEach: function (callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void {
        throw new Error("Function not implemented.");
      },
      entries: function (): IterableIterator<[string, FormDataEntryValue]> {
        throw new Error("Function not implemented.");
      },
      keys: function (): IterableIterator<string> {
        throw new Error("Function not implemented.");
      },
      values: function (): IterableIterator<FormDataEntryValue> {
        throw new Error("Function not implemented.");
      },
      [Symbol.iterator]: function (): IterableIterator<[string, FormDataEntryValue]> {
        throw new Error("Function not implemented.");
      }
    };
  
    displayResume(formData);
  });
  
  function displayResume(data: FormData) {
    resumeContent.innerHTML = `
      <h3>Name: ${data.name}</h3>
      <p>Email: ${data.email}</p>
      <p><strong>Education:</strong> ${data.education}</p>
      <p><strong>Work Experience:</strong> ${data.workExperience}</p>
      <p><strong>Skills:</strong> ${data.skills}</p>
    `;
  
    resumeDisplay.classList.remove('hidden');
  }
  
  // Editable feature
  resumeContent.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'P' || target.tagName === 'H3') {
      const currentText = target.innerText;
      const input = document.createElement('textarea');
      input.value = currentText;
      target.innerHTML = '';
      target.appendChild(input);
  
      input.addEventListener('blur', () => {
        target.innerHTML = input.value;
      });
    }
  });
  