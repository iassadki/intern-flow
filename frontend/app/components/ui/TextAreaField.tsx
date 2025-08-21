interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export default function TextAreaField({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  rows = 4 
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-vertical placeholder:text-gray-400"
      />
    </div>
  );
}
