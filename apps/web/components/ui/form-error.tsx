interface FormErrorProps {
  message?: string;
}

export function FormError({
  message,
}: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-2 text-sm text-red-400">
      {message}
    </p>
  );
}