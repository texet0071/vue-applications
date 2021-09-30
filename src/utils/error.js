const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Нет такого email',
    INVALID_PASSWORD: 'Неверный пароль',
    auth: 'Войдите в систему'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}