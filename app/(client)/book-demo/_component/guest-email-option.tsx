import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface EmailTagInputProps {
    maxTags?: number;
    onTagsChange?: (tags: string[]) => void;
}

export default function EmailTagInput({ maxTags = 10, onTagsChange }: EmailTagInputProps) {
    const [emails, setEmails] = useState<Array<{ value: string, isValid: boolean }>>([]);
    const [inputValue, setInputValue] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const addEmail = (email: string) => {
        const trimmedEmail = email.trim();
        if (!trimmedEmail) return;

        if (emails.length >= maxTags) return;

        const isValid = validateEmail(trimmedEmail);
        const newEmails = [...emails, { value: trimmedEmail, isValid }];
        setEmails(newEmails);
        setInputValue('');

        if (onTagsChange) {
            onTagsChange(newEmails.map(e => e.value));
        }
    };

    const removeEmail = (index: number) => {
        const newEmails = emails.filter((_, i) => i !== index);
        setEmails(newEmails);

        if (onTagsChange) {
            onTagsChange(newEmails.map(e => e.value));
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (['Enter', 'Tab', ',', ' '].includes(e.key)) {
            e.preventDefault();
            addEmail(inputValue);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const pastedEmails = pastedData.split(/[\s,;]+/);

        pastedEmails.forEach(email => {
            if (email && emails.length < maxTags) {
                addEmail(email);
            }
        });
    };

    return (
        <div className="w-full">
            <div className="p-2 border border-gray-300 h-[90px] rounded-md bg-white flex flex-wrap gap-1
             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                tabIndex={0}>
                {emails.map((email, index) => (
                    <Badge
                        key={index}
                        className={`flex items-center gap-1 px-2 py-1 ${email.isValid ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}
                    >
                        <span className="max-w-40 truncate">{email.value}</span>
                        <button
                            onClick={() => removeEmail(index)}
                            className={`rounded-full p-1 ${email.isValid ? 'hover:bg-blue-200' : 'hover:bg-red-200'}`}
                        >
                            <X size={14} />
                        </button>
                    </Badge>
                ))}
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    className="flex-grow  outline-none border-none shadow-none focus-visible:ring-0  focus-visible:ring-offset-0  px-1"
                    placeholder={emails.length === 0 ? "Guest Email(s)" : ""}
                />
            </div>
            <p className="text-gray-500 text-sm mt-2">
                Notify up to {maxTags} additional guests of the scheduled event.
            </p>
        </div>
    );
}