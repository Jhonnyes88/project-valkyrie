# Project Valkyrie Architecture

Versión: 1.0 (Draft)
Estado: Activo

---

# Propósito

Este documento define la arquitectura oficial de Project Valkyrie.

Su objetivo es establecer las reglas técnicas que rigen el desarrollo del proyecto para garantizar que todas las funcionalidades sean consistentes, mantenibles y escalables a largo plazo.

Este documento constituye la referencia técnica principal del proyecto y debe prevalecer sobre decisiones puntuales de implementación.

---

# Objetivos Arquitectónicos

La arquitectura de Project Valkyrie está diseñada para cumplir los siguientes objetivos:

- Escalabilidad.
- Mantenibilidad.
- Reutilización de componentes.
- Bajo acoplamiento.
- Alta cohesión.
- Facilidad para incorporar nuevas funcionalidades.
- Independencia entre la interfaz y la capa de persistencia.
- Preparación para producción.

---

# Principios de Diseño

Toda nueva funcionalidad deberá respetar los siguientes principios.

## Clean Architecture

La lógica de negocio no debe depender de la interfaz gráfica.

La persistencia no debe afectar la lógica del dominio.

Los componentes de UI no deben conocer detalles de almacenamiento.

---

## Separation of Concerns

Cada archivo debe tener una única responsabilidad claramente definida.

Ejemplos:

- Un componente renderiza UI.
- Un hook administra estado y lógica.
- Un repositorio gestiona la persistencia.
- Una utilidad contiene funciones puras.
- Una validación define reglas de negocio.

---

## Feature-Based Architecture

La aplicación se organiza por funcionalidades (Features) y no por tipo de archivo.

Cada Feature debe contener todo lo necesario para funcionar de manera independiente.

Ejemplo:

features/

    characters/

    projects/

    assets/

    publishing/

---

## Component Reusability

Antes de crear un nuevo componente debe evaluarse si la funcionalidad puede resolverse reutilizando uno existente.

Se priorizan componentes pequeños, desacoplados y composables.

---

# Stack Tecnológico

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

UI

- Base UI
- Lucide React
- Sonner

Arquitectura

- Repository Pattern
- Custom Hooks
- Feature-Based Architecture
- Clean Architecture

---

# Estructura General del Proyecto

La estructura de carpetas sigue una organización modular.

```text
apps/
    web/

features/
    characters/

components/

lib/

docs/
```

Cada directorio tiene una responsabilidad específica.

---

# Organización de una Feature

Cada Feature debe encapsular su propia lógica.

Ejemplo:

```text
features/
    characters/
        components/
        hooks/
        repository/
        services/
        validation/
        types/
        utils/
```

Una Feature no debe depender internamente de otra Feature.

La comunicación entre Features debe realizarse mediante interfaces bien definidas.

---

# Capas de la Arquitectura

## Presentación

Responsabilidades:

- Renderizar la interfaz.
- Manejar eventos del usuario.
- Consumir hooks.
- No contener lógica de persistencia.

Ejemplos:

- Pages
- Layouts
- Components

---

## Hooks

Los hooks concentran la lógica de interacción de la Feature.

Pueden contener:

- Estado.
- Lógica de negocio ligera.
- Coordinación entre componentes.
- Comunicación con repositorios.

No deben renderizar interfaz.

---

## Repositorios

Los repositorios representan el punto de acceso a los datos.

La interfaz nunca debe conocer cómo se almacenan los datos.

Actualmente existe:

- LocalStorageRepository

En el futuro podrán coexistir implementaciones como:

- ApiRepository
- IndexedDBRepository
- PrismaRepository

sin modificar la UI.

---

## Dominio

Representa las entidades del negocio.

Incluye:

- Types
- Interfaces
- Validaciones
- Reglas del dominio

Debe permanecer independiente de cualquier tecnología.

---

# Flujo de Datos

El flujo oficial es:

```text
Usuario

↓

UI

↓

Custom Hook

↓

Repository

↓

Persistencia
```

Y para lectura:

```text
Persistencia

↓

Repository

↓

Hook

↓

UI
```

La UI nunca accede directamente a la persistencia.

---

# Repository Pattern

Toda operación de lectura o escritura deberá realizarse mediante un repositorio.

Beneficios:

- Desacoplamiento.
- Testabilidad.
- Reemplazo sencillo del origen de datos.
- Evolución sin afectar la interfaz.

---

# Custom Hooks

Los hooks representan el punto de entrada de la lógica de una Feature.

Ejemplos:

- useCharacters
- useCharacterForm
- useCharacterSearch

Responsabilidades:

- Manejo de estado.
- Coordinación.
- Comunicación con repositorios.
- Transformación de datos.

No deben contener JSX.

---

# Componentes

Existen dos categorías.

## Componentes Compartidos

Ubicación:

components/

Son reutilizables por cualquier Feature.

Ejemplos:

- Button
- Input
- Label
- Select
- Textarea
- FormField

---

## Componentes de Dominio

Ubicación:

features/<feature>/components

Representan elementos específicos de una Feature.

Ejemplo:

CharacterCard

No deben reutilizarse fuera de su dominio salvo que evolucionen a componentes compartidos.

---

# Validaciones

Las validaciones deben permanecer centralizadas.

No deben duplicarse reglas entre formularios.

Toda validación reutilizable debe ubicarse dentro de la Feature correspondiente.

---

# Dependencias

Las dependencias permitidas siguen el siguiente flujo.

```text
UI

↓

Hooks

↓

Repository

↓

Persistencia
```

No está permitido invertir esta dirección.

---

# Escalabilidad

Toda nueva Feature deberá seguir la misma estructura definida para Characters.

Esto garantiza consistencia en todo el proyecto.

---

# Convenciones

Se prioriza:

- Código legible.
- Componentes pequeños.
- Funciones puras cuando sea posible.
- Reutilización antes que duplicación.
- Tipado estricto con TypeScript.

---

# Antipatrones

No están permitidos:

- Componentes gigantes.
- Lógica de negocio en la UI.
- Acceso directo a LocalStorage desde componentes.
- Duplicación de lógica.
- Dependencias circulares.
- Acoplamiento entre Features.

---

# Evolución

La arquitectura está diseñada para evolucionar gradualmente sin requerir reescrituras importantes.

La incorporación de nuevas tecnologías deberá realizarse respetando los principios definidos en este documento.

Toda decisión que implique modificar esta arquitectura deberá registrarse previamente en `DECISIONS.md`.