# Database

Versión: 1.0
Estado: Activo

---

# Propósito

Este documento define la estrategia oficial de persistencia de datos para Project Valkyrie.

Su objetivo es establecer las reglas, convenciones y principios que deberán seguir todas las implementaciones de almacenamiento del proyecto, garantizando consistencia, mantenibilidad y escalabilidad.

Aunque actualmente la aplicación utiliza un `LocalStorageRepository`, la arquitectura está diseñada para evolucionar hacia una base de datos relacional sin afectar la capa de presentación.

---

# Filosofía

La persistencia es un detalle de implementación.

La lógica de negocio nunca debe depender del mecanismo utilizado para almacenar la información.

Toda interacción con los datos deberá realizarse mediante el Repository Pattern definido en `ARCHITECTURE.md`.

---

# Estado Actual

Actualmente la persistencia se realiza mediante:

- LocalStorageRepository

Esta implementación tiene como objetivo facilitar el desarrollo del frontend sin depender de infraestructura externa.

---

# Evolución Prevista

La arquitectura permitirá incorporar nuevas implementaciones sin modificar la interfaz de usuario.

Ejemplos:

- PostgreSQL
- Prisma ORM
- SQLite
- Supabase
- Neon
- PlanetScale
- APIs externas

El reemplazo de una implementación por otra deberá realizarse únicamente en la capa de infraestructura.

---

# Modelo de Dominio

Cada entidad del sistema deberá representar un concepto claro del negocio.

Ejemplos:

- Character
- Project
- Asset
- Prompt
- Content
- User

Las entidades deben mantenerse independientes de la tecnología utilizada para almacenarlas.

---

# Identificadores

Todas las entidades deberán utilizar identificadores únicos.

Convención recomendada:

- UUID

Ejemplo:

```text
550e8400-e29b-41d4-a716-446655440000
```

No depender de identificadores autoincrementales para la lógica del sistema.

---

# Auditoría

Todas las entidades persistentes deberán incluir, como mínimo:

```ts
id

createdAt

updatedAt
```

Cuando aplique:

```ts
deletedAt
```

Esto permitirá implementar Soft Delete sin modificar el modelo.

---

# Soft Delete

Siempre que sea posible se preferirá Soft Delete sobre eliminación física.

Ventajas:

- Recuperación de información.
- Auditoría.
- Historial.
- Integridad referencial.

La eliminación definitiva deberá reservarse para procesos administrativos o tareas de mantenimiento.

---

# Relaciones

Las relaciones entre entidades deberán modelarse explícitamente.

Ejemplos:

```text
Project

↓

Characters

↓

Generated Content

↓

Assets
```

Evitar relaciones implícitas o dependencias ocultas.

---

# Convenciones de Nombres

## Tablas

Singular.

Ejemplo:

```text
character

project

asset
```

---

## Columnas

camelCase.

Ejemplo:

```text
createdAt

updatedAt

displayName
```

---

## Claves Foráneas

Utilizar el nombre de la entidad seguido de `Id`.

Ejemplo:

```text
characterId

projectId

userId
```

---

# Índices

Crear índices únicamente cuando exista una necesidad real.

Priorizar:

- Búsquedas frecuentes.
- Relaciones.
- Restricciones de unicidad.

Evitar índices innecesarios.

---

# Integridad

Toda relación deberá garantizar integridad referencial.

No deben existir registros huérfanos.

---

# Migraciones

Toda modificación del esquema deberá realizarse mediante migraciones versionadas.

Nunca modificar manualmente la estructura de producción.

---

# Repositorios

Los repositorios representan la única puerta de acceso a los datos.

La UI nunca debe conocer:

- SQL
- Prisma
- LocalStorage
- APIs
- Fetch

Toda interacción debe realizarse mediante interfaces.

---

# Transacciones

Cuando una operación afecte múltiples entidades deberá ejecutarse dentro de una transacción.

Esto garantiza consistencia ante errores.

---

# Validaciones

Las validaciones de negocio deben realizarse antes de persistir la información.

La base de datos complementa estas validaciones mediante restricciones e índices, pero no las reemplaza.

---

# Seguridad

Nunca almacenar:

- Contraseñas en texto plano.
- Claves privadas.
- Tokens sensibles sin protección.

La información confidencial deberá gestionarse mediante mecanismos adecuados de cifrado y control de acceso.

---

# Escalabilidad

El modelo de datos debe permitir:

- Incorporar nuevos módulos.
- Añadir nuevas relaciones.
- Cambiar el proveedor de persistencia.
- Escalar horizontalmente sin rediseñar el dominio.

---

# Futuro Tecnológico

La arquitectura de persistencia está preparada para evolucionar hacia un stack basado en:

- PostgreSQL
- Prisma ORM
- Migraciones versionadas
- Seeders
- Backups automatizados

Sin modificar la lógica de negocio ni la interfaz de usuario.

---

# Regla Fundamental

En Project Valkyrie, la persistencia es una infraestructura intercambiable.

Las decisiones de almacenamiento nunca deben condicionar el diseño del dominio ni la experiencia de usuario.