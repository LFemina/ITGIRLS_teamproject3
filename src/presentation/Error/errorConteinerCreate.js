export function CreateConteiner() {
    const errorContainer = document.createElement("div"); 

    errorContainer.innerHTML = `
            <div class="header">
            <p class="content" id="error"></p>
            </div>
        `;
    
    // добавляем классы
    //errorContainer.className = 'error';

    return errorContainer;
    }