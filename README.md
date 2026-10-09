
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Todo-List — React + Supabase

Aplicación web para la gestión de tareas, desarrollada con React y Supabase. Permite crear, consultar, editar, completar, buscar y eliminar tareas mediante una interfaz sencilla y responsiva.

Este proyecto fue desarrollado con el propósito de practicar el desarrollo de aplicaciones frontend, la administración de estados y la integración con una base de datos en la nube.

## Tecnologías utilizadas

- **React:** desarrollo de la interfaz de usuario.
- **Vite:** entorno de desarrollo y compilación.
- **Supabase:** almacenamiento y administración de tareas.
- **Zustand:** administración del estado global.
- **TanStack Query:** consultas, mutaciones y sincronización de datos.
- **React Hook Form:** manejo y validación de formularios.
- **Tailwind CSS:** estilos y diseño responsivo.
- **Lucide React:** iconos de la interfaz.
- **Sonner:** notificaciones de las operaciones.

## Funcionalidades

- Crear nuevas tareas.
- Visualizar tareas pendientes y completadas.
- Editar el nombre de las tareas.
- Marcar tareas como completadas.
- Regresar tareas completadas a pendientes.
- Eliminar tareas.
- Buscar tareas por nombre.
- Mostrar notificaciones de las operaciones realizadas.
- Interfaz adaptable a diferentes tamaños de pantalla.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

Acceder a la carpeta del proyecto:

```bash
cd TU_REPOSITORIO
```

Instalar las dependencias:

```bash
npm install
```

## Configuración de Supabase

La aplicación utiliza Supabase como servicio de base de datos.

Para ejecutar el proyecto, es necesario crear un proyecto propio en [Supabase](https://supabase.com) y configurar la siguiente tabla.

### Estructura de la base de datos

**Nombre de la tabla:** `Tasks`

| Columna | Tipo de dato | Descripción |
|---|---|---|
| `id` | int8 (bigint) | Identificador único de cada tarea. |
| `nameTask` | text | Nombre o descripción de la tarea. |
| `stateTask` | bool (boolean) | Estado de la tarea: pendiente o completada. |

El campo `id` debe configurarse como clave primaria y generarse automáticamente. El campo `stateTask` puede tener `false` como valor predeterminado.

### Estados de las tareas

- `false`: la tarea está pendiente.
- `true`: la tarea está completada.

### Variables de entorno

Crear un archivo `.env` en la raíz del proyecto y agregar las variables correspondientes:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_publica_de_supabase
```

Los nombres de las variables deben coincidir con los utilizados en la configuración del cliente de Supabase.

Por seguridad y organización, el archivo `.env` no se incluye en el repositorio. En su lugar, se proporciona un archivo `.env.example` como referencia.

**Nota:** Las variables con prefijo `VITE_` son accesibles desde el navegador. Por este motivo, únicamente deben contener valores destinados al uso público, nunca claves privilegiadas.

## Consideraciones de seguridad

Este proyecto fue desarrollado con fines educativos y de práctica.

Actualmente, la tabla `Tasks` tiene deshabilitada la seguridad a nivel de filas (*Row Level Security*, RLS), con el objetivo de facilitar las pruebas de las operaciones CRUD.

**Esta configuración no es adecuada para un entorno de producción**, ya que puede permitir que cualquier cliente con acceso a la API y los permisos correspondientes consulte o modifique los registros.

Para una implementación en producción, se recomienda:

- Habilitar RLS en las tablas de Supabase.
- Definir políticas de acceso para las operaciones CRUD.
- Implementar autenticación de usuarios cuando corresponda.
- Restringir el acceso a los registros según los permisos de cada usuario.
- No utilizar claves `service_role` ni claves secretas en el frontend.

## Ejecutar el proyecto

Una vez configuradas las variables de entorno y la base de datos, iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

## Organización del proyecto

```text
src/
├── components/
│   ├── Tasks/
│   │   ├── CompleteTask.jsx
│   │   ├── PendingTask.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskSearch.jsx
│   └── Modal.jsx
├── pages/
│   └── CrudPage.jsx
├── stores/
│   └── TaskStore.jsx
├── supabase/
└── tanStack/
```

La aplicación utiliza componentes independientes para facilitar el mantenimiento del código y separar las responsabilidades de cada sección.

## Estado del proyecto

Proyecto funcional desarrollado como práctica de integración entre React y Supabase, con posibilidad de incorporar nuevas funcionalidades y mejoras de seguridad en futuras versiones.
>>>>>>> 713db46bc84e8bdfef62cb1d804f634283fce885
