# Contributing

Versión: 1.0
Estado: Activo

---

# Propósito

Este documento define las normas oficiales para contribuir al desarrollo de Project Valkyrie.

Su objetivo es garantizar que todas las contribuciones mantengan la calidad, consistencia y arquitectura del proyecto.

Estas reglas aplican tanto a colaboradores humanos como a asistentes de IA utilizados durante el desarrollo.

---

# Filosofía

Toda contribución debe buscar mejorar el proyecto sin comprometer:

- La arquitectura.
- La mantenibilidad.
- La legibilidad.
- La escalabilidad.
- La experiencia del usuario.

El objetivo no es únicamente que el código funcione, sino que pueda mantenerse y evolucionar con facilidad.

---

# Antes de comenzar

Antes de implementar cualquier cambio:

- Comprender el problema.
- Revisar la documentación oficial.
- Identificar el impacto arquitectónico.
- Evitar asumir funcionalidades existentes.
- Consultar `DECISIONS.md` si la modificación afecta la arquitectura.

---

# Flujo de Trabajo

El desarrollo sigue el siguiente proceso:

1. Analizar el requerimiento.
2. Diseñar la solución.
3. Validar la arquitectura.
4. Implementar el cambio.
5. Verificar que compile correctamente.
6. Actualizar la documentación si es necesario.
7. Realizar el commit.

---

# Reglas de Desarrollo

Todo cambio debe respetar:

- `ARCHITECTURE.md`
- `CODING_STANDARDS.md`
- `DESIGN_SYSTEM.md`
- `DATABASE.md`

Si un cambio requiere romper alguna regla, deberá registrarse previamente en `DECISIONS.md`.

---

# Organización del Código

- Una responsabilidad por archivo.
- Componentes pequeños y reutilizables.
- Hooks para la lógica.
- Repositorios para la persistencia.
- Validaciones centralizadas.
- Tipado estricto con TypeScript.

---

# Commits

Los mensajes de commit deberán ser claros y seguir una convención consistente.

Formato recomendado:

```text
tipo: descripción breve
```

Ejemplos:

```text
feat: agrega módulo de proyectos

fix: corrige validación del formulario

refactor: simplifica useCharacters

docs: actualiza arquitectura

style: mejora espaciado del formulario

chore: actualiza dependencias
```

Tipos sugeridos:

- feat
- fix
- refactor
- docs
- style
- test
- chore

---

# Pull Requests

Antes de integrar un cambio verificar:

- El proyecto compila.
- No existen errores de TypeScript.
- No se rompe la arquitectura.
- No se introduce duplicación.
- La documentación está actualizada si aplica.

---

# Revisión de Código

Toda contribución debe responder afirmativamente a las siguientes preguntas:

- ¿Es fácil de entender?
- ¿Respeta la arquitectura?
- ¿Tiene una única responsabilidad?
- ¿Es reutilizable?
- ¿Evita deuda técnica?
- ¿Mantiene consistencia con el resto del proyecto?

---

# Documentación

Toda decisión importante debe quedar documentada.

Actualizar la documentación es parte del desarrollo, no una tarea opcional.

---

# Calidad

No se considerará terminado un cambio que:

- Funcione parcialmente.
- Introduzca deuda técnica innecesaria.
- Rompa la arquitectura.
- Carezca de documentación cuando sea requerida.

---

# Regla Fundamental

Cada contribución debe dejar Project Valkyrie en un estado igual o mejor que aquel en el que fue encontrado.