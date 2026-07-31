# Design System

Versión: 1.0
Estado: Activo

---

# Propósito

El Design System de Project Valkyrie define las reglas visuales, los componentes reutilizables y los principios de diseño que garantizan una experiencia consistente en toda la aplicación.

No es únicamente una colección de componentes; es la base sobre la cual se construye toda la interfaz del producto.

---

# Objetivos

El Design System busca:

- Mantener consistencia visual.
- Reducir duplicación de componentes.
- Facilitar el desarrollo.
- Mejorar la mantenibilidad.
- Garantizar accesibilidad.
- Simplificar la evolución de la interfaz.

---

# Principios de Diseño

Toda interfaz desarrollada para Valkyrie debe respetar los siguientes principios.

## Simplicidad

La interfaz debe ser clara y fácil de comprender.

Cada elemento debe existir porque aporta valor.

---

## Consistencia

Los mismos problemas deben resolverse siempre de la misma manera.

Los usuarios no deberían aprender distintos comportamientos para acciones similares.

---

## Reutilización

Antes de crear un componente nuevo debe verificarse si uno existente puede reutilizarse o extenderse.

---

## Accesibilidad

Todos los componentes deben ser utilizables mediante teclado.

Siempre que sea posible deben respetarse las recomendaciones WCAG.

---

## Feedback

Toda acción del usuario debe producir una respuesta visual.

Ejemplos:

- Loading
- Success
- Error
- Disabled
- Empty State

---

# Tecnologías

El Design System se construye utilizando:

- Tailwind CSS v4
- Base UI
- Lucide React
- Sonner

---

# Componentes Base

Actualmente el sistema incluye:

## Formularios

- Button
- Input
- Select
- Textarea
- Label
- FormField
- FormError

---

## Diálogos

- AlertDialog

---

## Notificaciones

- Sonner

---

## Iconografía

- Lucide React

---

# Convenciones

Todos los componentes deben:

- Ser reutilizables.
- Tener una única responsabilidad.
- Ser independientes de la lógica de negocio.
- Aceptar únicamente las props necesarias.
- Evitar efectos secundarios.

---

# Variantes

Los componentes deben exponer variantes cuando aporten valor.

Ejemplo:

Button

- default
- secondary
- outline
- ghost
- destructive

No deben crearse variantes únicamente por conveniencia.

---

# Estados

Todo componente interactivo debe contemplar, cuando aplique:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error

La ausencia de alguno de estos estados debe estar justificada.

---

# Espaciado

Se utilizará exclusivamente la escala definida por Tailwind CSS.

No deben utilizarse valores arbitrarios salvo casos excepcionales y debidamente justificados.

---

# Tipografía

La tipografía utilizada será la configurada globalmente por la aplicación.

Toda la jerarquía visual deberá construirse utilizando dicha configuración.

No deben incorporarse fuentes distintas sin una decisión arquitectónica registrada en `DECISIONS.md`.

---

# Colores

La paleta de colores se gestionará mediante variables de diseño.

No deben utilizarse colores codificados directamente en los componentes salvo situaciones excepcionales.

---

# Iconografía

Toda la iconografía deberá provenir de Lucide React.

No mezclar múltiples librerías de iconos.

---

# Formularios

Todos los formularios deberán:

- Mostrar validaciones consistentes.
- Indicar campos obligatorios cuando corresponda.
- Mantener el mismo comportamiento en toda la aplicación.
- Evitar validaciones duplicadas.

---

# Mensajes

Los mensajes al usuario deben ser:

- Claros.
- Breves.
- Accionables.

Evitar mensajes técnicos cuando puedan sustituirse por explicaciones comprensibles.

---

# Empty States

Toda pantalla sin información debe ofrecer:

- Una explicación.
- Una acción sugerida.
- Una interfaz consistente.

Nunca mostrar pantallas vacías sin contexto.

---

# Confirmaciones

Las acciones destructivas siempre deben requerir confirmación.

Ejemplos:

- Eliminar registros.
- Restablecer información.
- Acciones irreversibles.

---

# Responsividad

Todos los componentes deben diseñarse bajo un enfoque responsive.

La experiencia debe ser consistente en:

- Desktop
- Tablet
- Mobile

---

# Accesibilidad

Como mínimo:

- Navegación mediante teclado.
- Focus visible.
- Etiquetas correctamente asociadas.
- Contraste suficiente.
- Uso adecuado de atributos ARIA cuando corresponda.

---

# Evolución

Todo nuevo componente deberá cumplir estas condiciones antes de incorporarse al Design System:

- Resolver un problema reutilizable.
- Mantener coherencia visual.
- No duplicar componentes existentes.
- Estar documentado.
- Ser compatible con la arquitectura del proyecto.

---

# Componentes Actuales

Actualmente forman parte del Design System:

- Button
- Input
- Select
- Textarea
- Label
- FormField
- FormError
- AlertDialog

Este listado crecerá conforme evolucione el proyecto.

---

# Regla Fundamental

El Design System representa la única fuente oficial para el desarrollo de interfaces en Project Valkyrie.

Ningún componente debe incorporarse al proyecto sin respetar las reglas definidas en este documento.