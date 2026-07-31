# Architecture Decision Records (ADR)

Versión: 1.0
Estado: Activo

---

# Propósito

Este documento registra las decisiones arquitectónicas importantes tomadas durante el desarrollo de Project Valkyrie.

Su objetivo es documentar el contexto, las alternativas evaluadas, la decisión adoptada y sus consecuencias.

Toda decisión que modifique significativamente la arquitectura, el stack tecnológico o la estrategia de desarrollo deberá registrarse aquí.

---

# Formato

Cada decisión seguirá la siguiente estructura:

- ID
- Fecha
- Estado
- Contexto
- Decisión
- Alternativas consideradas
- Consecuencias

Estados posibles:

- Propuesta
- Aprobada
- Reemplazada
- Obsoleta

---

# ADR-001

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Adopción de Feature-Based Architecture

### Contexto

El proyecto requería una estructura escalable que permitiera incorporar nuevos módulos sin generar dependencias innecesarias entre ellos.

### Decisión

Organizar la aplicación por funcionalidades (Features) en lugar de hacerlo por tipo de archivo.

Cada Feature encapsula:

- Componentes
- Hooks
- Tipos
- Validaciones
- Repositorios
- Servicios
- Utilidades

### Alternativas

- Organización por capas.
- Organización por tipo de archivo.

### Consecuencias

- Mayor modularidad.
- Escalabilidad.
- Mejor mantenibilidad.
- Menor acoplamiento.

---

# ADR-002

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Uso de Repository Pattern

### Contexto

Era necesario desacoplar la interfaz del mecanismo de persistencia.

### Decisión

Toda interacción con los datos se realizará mediante repositorios.

La interfaz no conocerá detalles de LocalStorage, APIs o bases de datos.

### Alternativas

- Acceso directo desde la UI.
- Servicios acoplados a LocalStorage.

### Consecuencias

- Persistencia intercambiable.
- Mayor facilidad para pruebas.
- Evolución hacia bases de datos reales sin modificar la UI.

---

# ADR-003

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Persistencia inicial mediante LocalStorage

### Contexto

Durante la fase inicial era prioritario construir la arquitectura del frontend sin depender de infraestructura externa.

### Decisión

Implementar un LocalStorageRepository como primera implementación del repositorio.

### Alternativas

- PostgreSQL desde el inicio.
- Backend completo.
- Base de datos embebida.

### Consecuencias

- Desarrollo más rápido.
- Arquitectura validada.
- Fácil sustitución por otro repositorio.

---

# ADR-004

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Adopción de Clean Architecture

### Contexto

Se buscaba evitar el acoplamiento entre la interfaz, la lógica del dominio y la persistencia.

### Decisión

Aplicar los principios de Clean Architecture en todo el proyecto.

### Consecuencias

- Separación de responsabilidades.
- Mayor mantenibilidad.
- Código más fácil de probar.
- Evolución independiente de cada capa.

---

# ADR-005

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Uso de Custom Hooks como capa de coordinación

### Contexto

Era necesario evitar que los componentes React acumularan lógica de negocio y manejo de estado.

### Decisión

Toda la lógica de coordinación deberá implementarse mediante Custom Hooks.

### Consecuencias

- Componentes más simples.
- Mayor reutilización.
- Separación clara entre UI y lógica.

---

# ADR-006

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Construcción de un Design System propio

### Contexto

La aplicación requería mantener una interfaz consistente y reutilizable.

### Decisión

Crear un Design System basado en Base UI, Tailwind CSS y componentes propios.

### Consecuencias

- Consistencia visual.
- Reutilización de componentes.
- Facilidad para evolucionar la interfaz.

---

# ADR-007

## Fecha

2026-07-31

## Estado

Aprobada

## Título

Documentación como fuente oficial del proyecto

### Contexto

El proyecto crecerá durante un largo periodo y podrá continuar su desarrollo en diferentes conversaciones o por distintos colaboradores.

### Decisión

Toda decisión importante deberá quedar reflejada en la documentación oficial ubicada en la carpeta `docs`.

La documentación tendrá prioridad sobre decisiones implícitas en el código cuando exista una discrepancia, hasta que ambas se sincronicen.

### Consecuencias

- Mejor transferencia de conocimiento.
- Menor dependencia del contexto histórico.
- Incorporación más rápida de nuevos colaboradores.
- Mayor consistencia en el desarrollo del proyecto.

---

# Registro de Cambios

Cada nueva decisión deberá añadirse al final de este documento respetando el formato establecido.

Las decisiones existentes no deberán modificarse; si una decisión cambia, se creará un nuevo ADR indicando que reemplaza al anterior.

---

# Regla Fundamental

Las decisiones arquitectónicas forman parte del conocimiento del proyecto.

Registrar una decisión es tan importante como implementar el código que la materializa.