import { UserError } from "../../domain/ErrorClases";
import { ApiError } from "../../domain/ErrorClases";
import { NotFoundError } from "../../domain/ErrorClases";
import { CreateConteiner } from "./errorConteinerCreate";

export function errorHandler(error) {
    const errorDiv = document.getElementById('error'); 
    errorDiv.textContent = ""; // Очищаем предыдущие сообщения об ошибках 

    if (error instanceof UserError) {
        errorDiv.textContent = error.message;
    } else if (error instanceof NotFoundError) {
        errorDiv.textContent = error.message; 
    } else if (error instanceof ApiError) {
        errorDiv.textContent = "Произошла ошибка при обращении к API: " + error.message;
    } else {
        errorDiv.textContent = "Неизвестная ошибка: " + error.message;
    }
};