export interface SignUpInputProps {
    labelText: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}