// src/lib/a11y/focus-first-field-error.ts

export function focusFirstFieldError(fieldNames: string[]) {
  if (fieldNames.length === 0) {
    return;
  }

  for (const name of fieldNames) {
    const field = document.querySelector<HTMLElement>(`[name="${name}"]`);

    if (field) {
      field.focus();
      return;
    }
  }
}
