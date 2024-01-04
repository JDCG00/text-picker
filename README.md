# Text picker

Este proyecto contiene un archivo `script.js` que implementa una funcionalidad de copiado al portapapeles.

## script.js

El archivo `script.js` contiene un único controlador de eventos que se activa cuando se hace clic en cualquier parte del documento.

### Funcionalidad

Cuando se hace clic en cualquier elemento del documento, el controlador de eventos realiza las siguientes acciones:

- Previene la acción predeterminada del evento de clic.
- Obtiene el elemento del DOM en el que se hizo clic.
- Captura el texto del elemento en el que se hizo clic.
- Imprime en la consola el elemento y su texto.
- Intenta copiar el texto del elemento al portapapeles.

Si la copia al portapapeles es exitosa, se imprime un mensaje en la consola. Si ocurre un error, se imprime el error en la consola.

## Cómo usar

Para usar este script en tu proyecto:

1. Clona este repositorio.
2. Instala la extensión en chrome.
3. Ahora, cuando hagas clic en cualquier elemento de tu documento, su texto se copiará al portapapeles.

## Licencia

Incluye información sobre la licencia aquí.
