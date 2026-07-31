# Coding Standards

Versión: 1.0 (Draft)
Estado: Activo

---

# Propósito

Este documento define los estándares oficiales de desarrollo para Project Valkyrie.

Su objetivo es garantizar que todo el código del proyecto sea consistente, legible, mantenible y fácil de evolucionar, independientemente del desarrollador que lo escriba.

Estas reglas aplican a todo el repositorio.

---

# Principios Generales

Todo cambio debe priorizar:

- Legibilidad.
- Simplicidad.
- Reutilización.
- Mantenibilidad.
- Escalabilidad.
- Consistencia.

Se debe evitar cualquier solución que comprometa la arquitectura del proyecto por una mejora temporal de velocidad.

---

# Filosofía

Siempre favorecer:

- Código explícito sobre código "inteligente".
- Composición sobre herencia.
- Funciones pequeñas.
- Componentes pequeños.
- Responsabilidad única.
- Bajo acoplamiento.
- Alta cohesión.

---

# Convenciones de Nombres

## Componentes React

Siempre utilizar PascalCase.

Correcto

```tsx
CharacterCard.tsx
AvatarUploader.tsx
CreateCharacterModal.tsx
```

Incorrecto

```tsx
characterCard.tsx
avatar.tsx
modal.tsx
```

---

## Hooks

Siempre comenzar con `use`.

Correcto

```ts
useCharacters.ts
useCharacterForm.ts
useCharacterSearch.ts
```

---

## Tipos

Utilizar PascalCase.

```ts
Character

CharacterFormData

CharacterRepository
```

---

## Interfaces

Cuando representen contratos públicos, utilizar el prefijo `I`.

Ejemplo:

```ts
ICharacterRepository
```

Si el proyecto decide prescindir de este prefijo, la convención deberá aplicarse de forma consistente en todo el código.

---

## Variables

Utilizar camelCase.

```ts
selectedCharacter

isLoading

searchTerm

repository
```

---

## Constantes

Utilizar UPPER_SNAKE_CASE únicamente para constantes globales.

```ts
MAX_UPLOAD_SIZE

DEFAULT_LANGUAGE

MAX_CHARACTERS
```

Las constantes de uso local pueden mantenerse en camelCase.

---

# Organización de Archivos

Cada archivo debe contener una única responsabilidad.

No mezclar:

- Componentes.
- Hooks.
- Tipos.
- Utilidades.
- Validaciones.

---

# Componentes

Cada componente debe ser:

- Pequeño.
- Reutilizable cuando sea posible.
- Fácil de leer.
- Fácil de probar.

Si un componente supera aproximadamente las 250 líneas, evaluar su división en componentes más pequeños.

---

# Hooks

Los hooks concentran la lógica.

Pueden contener:

- Estado.
- Efectos.
- Transformación de datos.
- Coordinación entre componentes.
- Comunicación con repositorios.

No deben contener JSX.

---

# Funciones

Preferir funciones pequeñas.

Evitar funciones con múltiples responsabilidades.

Cuando una función comienza a crecer, considerar extraer parte de la lógica a funciones auxiliares.

---

# TypeScript

Siempre utilizar tipado estricto.

Evitar:

```ts
any
```

Preferir:

```ts
unknown
```

o un tipo específico.

No utilizar `as` salvo cuando sea estrictamente necesario y esté justificado.

---

# Imports

Orden recomendado:

1. Librerías externas.
2. Alias internos (`@/`).
3. Imports relativos.
4. Imports de tipos (`import type`).

Ejemplo:

```ts
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { CharacterCard } from "../components/CharacterCard";

import type { Character } from "../types/character";
```

---

# Exportaciones

Preferir exportaciones nombradas.

```ts
export function CharacterCard() {}
```

Evitar exportaciones por defecto, salvo en los casos donde el framework las requiera (por ejemplo, páginas y layouts de Next.js).

---

# Comentarios

Los comentarios deben explicar el "por qué", no el "qué".

Incorrecto

```ts
// Incrementa el contador
count++;
```

Correcto

```ts
// Se reinicia el contador para evitar reutilizar un estado inconsistente
count = 0;
```

---

# Manejo de Errores

Nunca ignorar errores silenciosamente.

Siempre:

- Registrar el error cuando corresponda.
- Mostrar un mensaje útil al usuario.
- Mantener el estado consistente.

---

# Duplicación de Código

Antes de copiar código, evaluar si puede extraerse a:

- Un componente.
- Un hook.
- Una utilidad.
- Un servicio.

La reutilización debe ser una decisión consciente, evitando también abstraer prematuramente.

---

# Dependencias

No introducir nuevas dependencias sin una justificación clara.

Antes de instalar una librería, evaluar:

- ¿Puede resolverse con código propio?
- ¿Ya existe una solución en el proyecto?
- ¿Aporta un beneficio real?
- ¿Cuál es su impacto en el tamaño y mantenimiento del proyecto?

---

# Calidad del Código

Antes de considerar un cambio terminado, verificar:

- El proyecto compila sin errores.
- No existen errores de TypeScript.
- No existen advertencias relevantes.
- No se rompe la arquitectura.
- El código es legible.
- La responsabilidad está claramente definida.

---

# Revisión de Código

Todo cambio debe responder afirmativamente a estas preguntas:

- ¿Es fácil de entender?
- ¿Respeta la arquitectura?
- ¿Evita duplicación?
- ¿Tiene una única responsabilidad?
- ¿Es reutilizable cuando corresponde?
- ¿Podrá mantenerse fácilmente dentro de seis meses?

Si alguna respuesta es "no", el cambio debe revisarse antes de integrarse.

---

# Regla Fundamental

En Project Valkyrie, el código no se considera terminado cuando simplemente funciona.

Se considera terminado cuando, además de funcionar, es claro, consistente con la arquitectura, fácil de mantener y preparado para evolucionar junto con el producto.