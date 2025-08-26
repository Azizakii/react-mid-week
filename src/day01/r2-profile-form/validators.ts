export const validateName = (name: string): string | null => {
    if(name.trim().length < 2) return 'Min 2 simbols'
    return null
}

export const validateEmail = (email: string): string | null => {
    if(!email.trim()) return 'Email necessarilly'
    if(!email.includes('@')) return 'Incorrect email';
    return null
}
