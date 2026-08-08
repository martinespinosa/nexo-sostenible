# Nexo Sostenible

Landing page institucional de Nexo Sostenible.

**Concepto:** Economía · Ambiente · Bienestar · Futuro

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla

Sin frameworks, sin dependencias npm y sin CDN externos.

## Estructura del proyecto

```
index.html        Página principal (landing de una sola página)
css/styles.css    Estilos globales y responsive
js/main.js        Menú móvil y año del footer
images/           Carpeta para logo y fotografías
```

## Visualizar localmente

Abrir `index.html` directamente en el navegador:

- Doble clic sobre el archivo, o
- Arrastrar `index.html` a una ventana del navegador, o
- Desde la terminal, en la raíz del proyecto:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

También puede servir la carpeta con cualquier servidor estático local si lo prefiere.

## Contenido por sustituir

### Logo

En `index.html`, dentro del `<header>`, reemplazar el wordmark temporal por:

```html
<img src="images/logo-nexo.svg" alt="Nexo Sostenible" class="logo__image">
```

(o `images/logo-nexo.png` según el formato disponible).

### Fotografía principal (hero)

En la sección hero, reemplazar el `<div class="hero__visual">` placeholder por:

```html
<img src="images/hero-paisaje.jpg" alt="Descripción del paisaje" class="hero__image">
```

Colocar la imagen en `images/`.

### Fotografías del equipo

En la sección Nosotros, reemplazar cada `<figure class="photo-placeholder">` por:

```html
<img src="images/equipo-01.jpg" alt="Descripción" class="nosotros__photo">
<img src="images/equipo-02.jpg" alt="Descripción" class="nosotros__photo">
```

### Contacto

En la sección Contacto, actualizar:

- `[correo por definir]` con el correo real.
- `[teléfono por definir]` con el teléfono o WhatsApp real.
- El botón **Escríbanos**: cambiar `href="#"` por `mailto:correo@ejemplo.com` o un enlace de WhatsApp.

## Despliegue

Esta página se publicará posteriormente en **nexo-sostenible.com** mediante GitHub y Cloudflare Pages.
