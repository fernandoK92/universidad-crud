
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Docente
 * 
 */
export type Docente = $Result.DefaultSelection<Prisma.$DocentePayload>
/**
 * Model Registro
 * 
 */
export type Registro = $Result.DefaultSelection<Prisma.$RegistroPayload>
/**
 * Model Inscripcion
 * 
 */
export type Inscripcion = $Result.DefaultSelection<Prisma.$InscripcionPayload>
/**
 * Model Dictan
 * 
 */
export type Dictan = $Result.DefaultSelection<Prisma.$DictanPayload>
/**
 * Model DocenteCarrera
 * 
 */
export type DocenteCarrera = $Result.DefaultSelection<Prisma.$DocenteCarreraPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model UsuarioRol
 * 
 */
export type UsuarioRol = $Result.DefaultSelection<Prisma.$UsuarioRolPayload>
/**
 * Model RolPermiso
 * 
 */
export type RolPermiso = $Result.DefaultSelection<Prisma.$RolPermisoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carreras
 * const carreras = await prisma.carrera.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Carreras
   * const carreras = await prisma.carrera.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docente`: Exposes CRUD operations for the **Docente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docentes
    * const docentes = await prisma.docente.findMany()
    * ```
    */
  get docente(): Prisma.DocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registro`: Exposes CRUD operations for the **Registro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registros
    * const registros = await prisma.registro.findMany()
    * ```
    */
  get registro(): Prisma.RegistroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripcion`: Exposes CRUD operations for the **Inscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripcions
    * const inscripcions = await prisma.inscripcion.findMany()
    * ```
    */
  get inscripcion(): Prisma.InscripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictan`: Exposes CRUD operations for the **Dictan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dictans
    * const dictans = await prisma.dictan.findMany()
    * ```
    */
  get dictan(): Prisma.DictanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docenteCarrera`: Exposes CRUD operations for the **DocenteCarrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocenteCarreras
    * const docenteCarreras = await prisma.docenteCarrera.findMany()
    * ```
    */
  get docenteCarrera(): Prisma.DocenteCarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioRol`: Exposes CRUD operations for the **UsuarioRol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioRols
    * const usuarioRols = await prisma.usuarioRol.findMany()
    * ```
    */
  get usuarioRol(): Prisma.UsuarioRolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolPermiso`: Exposes CRUD operations for the **RolPermiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermiso.findMany()
    * ```
    */
  get rolPermiso(): Prisma.RolPermisoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Carrera: 'Carrera',
    Materia: 'Materia',
    Estudiante: 'Estudiante',
    Docente: 'Docente',
    Registro: 'Registro',
    Inscripcion: 'Inscripcion',
    Dictan: 'Dictan',
    DocenteCarrera: 'DocenteCarrera',
    Usuario: 'Usuario',
    Rol: 'Rol',
    Permiso: 'Permiso',
    UsuarioRol: 'UsuarioRol',
    RolPermiso: 'RolPermiso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "carrera" | "materia" | "estudiante" | "docente" | "registro" | "inscripcion" | "dictan" | "docenteCarrera" | "usuario" | "rol" | "permiso" | "usuarioRol" | "rolPermiso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Docente: {
        payload: Prisma.$DocentePayload<ExtArgs>
        fields: Prisma.DocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findFirst: {
            args: Prisma.DocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findMany: {
            args: Prisma.DocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          create: {
            args: Prisma.DocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          createMany: {
            args: Prisma.DocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          delete: {
            args: Prisma.DocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          update: {
            args: Prisma.DocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          deleteMany: {
            args: Prisma.DocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          upsert: {
            args: Prisma.DocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          aggregate: {
            args: Prisma.DocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocente>
          }
          groupBy: {
            args: Prisma.DocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCountArgs<ExtArgs>
            result: $Utils.Optional<DocenteCountAggregateOutputType> | number
          }
        }
      }
      Registro: {
        payload: Prisma.$RegistroPayload<ExtArgs>
        fields: Prisma.RegistroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          findFirst: {
            args: Prisma.RegistroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          findMany: {
            args: Prisma.RegistroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          create: {
            args: Prisma.RegistroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          createMany: {
            args: Prisma.RegistroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          delete: {
            args: Prisma.RegistroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          update: {
            args: Prisma.RegistroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          deleteMany: {
            args: Prisma.RegistroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          upsert: {
            args: Prisma.RegistroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          aggregate: {
            args: Prisma.RegistroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistro>
          }
          groupBy: {
            args: Prisma.RegistroGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroCountAggregateOutputType> | number
          }
        }
      }
      Inscripcion: {
        payload: Prisma.$InscripcionPayload<ExtArgs>
        fields: Prisma.InscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findFirst: {
            args: Prisma.InscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findMany: {
            args: Prisma.InscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          create: {
            args: Prisma.InscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          createMany: {
            args: Prisma.InscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          delete: {
            args: Prisma.InscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          update: {
            args: Prisma.InscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          upsert: {
            args: Prisma.InscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          aggregate: {
            args: Prisma.InscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcion>
          }
          groupBy: {
            args: Prisma.InscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionCountAggregateOutputType> | number
          }
        }
      }
      Dictan: {
        payload: Prisma.$DictanPayload<ExtArgs>
        fields: Prisma.DictanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>
          }
          findFirst: {
            args: Prisma.DictanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>
          }
          findMany: {
            args: Prisma.DictanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>[]
          }
          create: {
            args: Prisma.DictanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>
          }
          createMany: {
            args: Prisma.DictanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>[]
          }
          delete: {
            args: Prisma.DictanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>
          }
          update: {
            args: Prisma.DictanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>
          }
          deleteMany: {
            args: Prisma.DictanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>[]
          }
          upsert: {
            args: Prisma.DictanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictanPayload>
          }
          aggregate: {
            args: Prisma.DictanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictan>
          }
          groupBy: {
            args: Prisma.DictanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictanCountArgs<ExtArgs>
            result: $Utils.Optional<DictanCountAggregateOutputType> | number
          }
        }
      }
      DocenteCarrera: {
        payload: Prisma.$DocenteCarreraPayload<ExtArgs>
        fields: Prisma.DocenteCarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteCarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteCarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>
          }
          findFirst: {
            args: Prisma.DocenteCarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteCarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>
          }
          findMany: {
            args: Prisma.DocenteCarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>[]
          }
          create: {
            args: Prisma.DocenteCarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>
          }
          createMany: {
            args: Prisma.DocenteCarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocenteCarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>[]
          }
          delete: {
            args: Prisma.DocenteCarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>
          }
          update: {
            args: Prisma.DocenteCarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>
          }
          deleteMany: {
            args: Prisma.DocenteCarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteCarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocenteCarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>[]
          }
          upsert: {
            args: Prisma.DocenteCarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocenteCarreraPayload>
          }
          aggregate: {
            args: Prisma.DocenteCarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocenteCarrera>
          }
          groupBy: {
            args: Prisma.DocenteCarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocenteCarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCarreraCountArgs<ExtArgs>
            result: $Utils.Optional<DocenteCarreraCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      UsuarioRol: {
        payload: Prisma.$UsuarioRolPayload<ExtArgs>
        fields: Prisma.UsuarioRolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioRolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioRolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          findFirst: {
            args: Prisma.UsuarioRolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioRolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          findMany: {
            args: Prisma.UsuarioRolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          create: {
            args: Prisma.UsuarioRolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          createMany: {
            args: Prisma.UsuarioRolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioRolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          delete: {
            args: Prisma.UsuarioRolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          update: {
            args: Prisma.UsuarioRolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioRolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioRolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioRolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioRolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          aggregate: {
            args: Prisma.UsuarioRolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioRol>
          }
          groupBy: {
            args: Prisma.UsuarioRolGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioRolGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioRolCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioRolCountAggregateOutputType> | number
          }
        }
      }
      RolPermiso: {
        payload: Prisma.$RolPermisoPayload<ExtArgs>
        fields: Prisma.RolPermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findFirst: {
            args: Prisma.RolPermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findMany: {
            args: Prisma.RolPermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          create: {
            args: Prisma.RolPermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          createMany: {
            args: Prisma.RolPermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolPermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          delete: {
            args: Prisma.RolPermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          update: {
            args: Prisma.RolPermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolPermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          upsert: {
            args: Prisma.RolPermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          aggregate: {
            args: Prisma.RolPermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermiso>
          }
          groupBy: {
            args: Prisma.RolPermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisoCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    carrera?: CarreraOmit
    materia?: MateriaOmit
    estudiante?: EstudianteOmit
    docente?: DocenteOmit
    registro?: RegistroOmit
    inscripcion?: InscripcionOmit
    dictan?: DictanOmit
    docenteCarrera?: DocenteCarreraOmit
    usuario?: UsuarioOmit
    rol?: RolOmit
    permiso?: PermisoOmit
    usuarioRol?: UsuarioRolOmit
    rolPermiso?: RolPermisoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    estudiantes: number
    docentesCarrera: number
    materias: number
    registros: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | CarreraCountOutputTypeCountEstudiantesArgs
    docentesCarrera?: boolean | CarreraCountOutputTypeCountDocentesCarreraArgs
    materias?: boolean | CarreraCountOutputTypeCountMateriasArgs
    registros?: boolean | CarreraCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountDocentesCarreraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteCarreraWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    registros: number
    inscripciones: number
    dictan: number
    carreras: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | MateriaCountOutputTypeCountRegistrosArgs
    inscripciones?: boolean | MateriaCountOutputTypeCountInscripcionesArgs
    dictan?: boolean | MateriaCountOutputTypeCountDictanArgs
    carreras?: boolean | MateriaCountOutputTypeCountCarrerasArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountDictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictanWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountCarrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    inscripciones: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | EstudianteCountOutputTypeCountInscripcionesArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }


  /**
   * Count Type DocenteCountOutputType
   */

  export type DocenteCountOutputType = {
    dictan: number
    docentesCarrera: number
  }

  export type DocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictan?: boolean | DocenteCountOutputTypeCountDictanArgs
    docentesCarrera?: boolean | DocenteCountOutputTypeCountDocentesCarreraArgs
  }

  // Custom InputTypes
  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCountOutputType
     */
    select?: DocenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountDictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictanWhereInput
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountDocentesCarreraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteCarreraWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    roles: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UsuarioCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    permisos: number
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    roles: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermisoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarreraMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarreraCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id?: true
  }

  export type CarreraSumAggregateInputType = {
    id?: true
  }

  export type CarreraMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarreraMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarreraCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id: number
    nombre: string
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    docentesCarrera?: boolean | Carrera$docentesCarreraArgs<ExtArgs>
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    registros?: boolean | Carrera$registrosArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    docentesCarrera?: boolean | Carrera$docentesCarreraArgs<ExtArgs>
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    registros?: boolean | Carrera$registrosArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      estudiantes: Prisma.$EstudiantePayload<ExtArgs>[]
      docentesCarrera: Prisma.$DocenteCarreraPayload<ExtArgs>[]
      materias: Prisma.$MateriaPayload<ExtArgs>[]
      registros: Prisma.$RegistroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraWithIdOnly = await prisma.carrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras and returns the data updated in the database.
     * @param {CarreraUpdateManyAndReturnArgs} args - Arguments to update many Carreras.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiantes<T extends Carrera$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    docentesCarrera<T extends Carrera$docentesCarreraArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$docentesCarreraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materias<T extends Carrera$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros<T extends Carrera$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera updateManyAndReturn
   */
  export type CarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.estudiantes
   */
  export type Carrera$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    cursor?: EstudianteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Carrera.docentesCarrera
   */
  export type Carrera$docentesCarreraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    where?: DocenteCarreraWhereInput
    orderBy?: DocenteCarreraOrderByWithRelationInput | DocenteCarreraOrderByWithRelationInput[]
    cursor?: DocenteCarreraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocenteCarreraScalarFieldEnum | DocenteCarreraScalarFieldEnum[]
  }

  /**
   * Carrera.materias
   */
  export type Carrera$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Carrera.registros
   */
  export type Carrera$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    cursor?: RegistroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id?: true
  }

  export type MateriaSumAggregateInputType = {
    id?: true
  }

  export type MateriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: number
    nombre: string
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    registros?: boolean | Materia$registrosArgs<ExtArgs>
    inscripciones?: boolean | Materia$inscripcionesArgs<ExtArgs>
    dictan?: boolean | Materia$dictanArgs<ExtArgs>
    carreras?: boolean | Materia$carrerasArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | Materia$registrosArgs<ExtArgs>
    inscripciones?: boolean | Materia$inscripcionesArgs<ExtArgs>
    dictan?: boolean | Materia$dictanArgs<ExtArgs>
    carreras?: boolean | Materia$carrerasArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      registros: Prisma.$RegistroPayload<ExtArgs>[]
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
      dictan: Prisma.$DictanPayload<ExtArgs>[]
      carreras: Prisma.$CarreraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registros<T extends Materia$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Materia$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscripciones<T extends Materia$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dictan<T extends Materia$dictanArgs<ExtArgs> = {}>(args?: Subset<T, Materia$dictanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carreras<T extends Materia$carrerasArgs<ExtArgs> = {}>(args?: Subset<T, Materia$carrerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'Int'>
    readonly nombre: FieldRef<"Materia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.registros
   */
  export type Materia$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    cursor?: RegistroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Materia.inscripciones
   */
  export type Materia$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Materia.dictan
   */
  export type Materia$dictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    where?: DictanWhereInput
    orderBy?: DictanOrderByWithRelationInput | DictanOrderByWithRelationInput[]
    cursor?: DictanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictanScalarFieldEnum | DictanScalarFieldEnum[]
  }

  /**
   * Materia.carreras
   */
  export type Materia$carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    cursor?: CarreraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
  }

  export type EstudianteCountAggregateOutputType = {
    id: number
    nombre: number
    carreraId: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id?: true
    carreraId?: true
  }

  export type EstudianteSumAggregateInputType = {
    id?: true
    carreraId?: true
  }

  export type EstudianteMinAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
  }

  export type EstudianteCountAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id: number
    nombre: string
    carreraId: number
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    inscripciones?: boolean | Estudiante$inscripcionesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectScalar = {
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "carreraId", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    inscripciones?: boolean | Estudiante$inscripcionesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      carreraId: number
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiantes and returns the data saved in the database.
     * @param {EstudianteCreateManyAndReturnArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes and returns the data updated in the database.
     * @param {EstudianteUpdateManyAndReturnArgs} args - Arguments to update many Estudiantes.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstudianteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inscripciones<T extends Estudiante$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estudiante model
   */
  interface EstudianteFieldRefs {
    readonly id: FieldRef<"Estudiante", 'Int'>
    readonly nombre: FieldRef<"Estudiante", 'String'>
    readonly carreraId: FieldRef<"Estudiante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante createManyAndReturn
   */
  export type EstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante updateManyAndReturn
   */
  export type EstudianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to delete.
     */
    limit?: number
  }

  /**
   * Estudiante.inscripciones
   */
  export type Estudiante$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Docente
   */

  export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  export type DocenteAvgAggregateOutputType = {
    id: number | null
  }

  export type DocenteSumAggregateOutputType = {
    id: number | null
  }

  export type DocenteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DocenteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DocenteCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type DocenteAvgAggregateInputType = {
    id?: true
  }

  export type DocenteSumAggregateInputType = {
    id?: true
  }

  export type DocenteMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DocenteMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DocenteCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type DocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente to aggregate.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docentes
    **/
    _count?: true | DocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteMaxAggregateInputType
  }

  export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente[P]>
      : GetScalarType<T[P], AggregateDocente[P]>
  }




  export type DocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithAggregationInput | DocenteOrderByWithAggregationInput[]
    by: DocenteScalarFieldEnum[] | DocenteScalarFieldEnum
    having?: DocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCountAggregateInputType | true
    _avg?: DocenteAvgAggregateInputType
    _sum?: DocenteSumAggregateInputType
    _min?: DocenteMinAggregateInputType
    _max?: DocenteMaxAggregateInputType
  }

  export type DocenteGroupByOutputType = {
    id: number
    nombre: string
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteGroupByOutputType[P]>
        }
      >
    >


  export type DocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    dictan?: boolean | Docente$dictanArgs<ExtArgs>
    docentesCarrera?: boolean | Docente$docentesCarreraArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type DocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["docente"]>
  export type DocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictan?: boolean | Docente$dictanArgs<ExtArgs>
    docentesCarrera?: boolean | Docente$docentesCarreraArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente"
    objects: {
      dictan: Prisma.$DictanPayload<ExtArgs>[]
      docentesCarrera: Prisma.$DocenteCarreraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["docente"]>
    composites: {}
  }

  type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = $Result.GetResult<Prisma.$DocentePayload, S>

  type DocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocenteCountAggregateInputType | true
    }

  export interface DocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente'], meta: { name: 'Docente' } }
    /**
     * Find zero or one Docente that matches the filter.
     * @param {DocenteFindUniqueArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocenteFindUniqueArgs>(args: SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Docente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocenteFindUniqueOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocenteFindFirstArgs>(args?: SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Docentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docentes
     * const docentes = await prisma.docente.findMany()
     * 
     * // Get first 10 Docentes
     * const docentes = await prisma.docente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docenteWithIdOnly = await prisma.docente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocenteFindManyArgs>(args?: SelectSubset<T, DocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Docente.
     * @param {DocenteCreateArgs} args - Arguments to create a Docente.
     * @example
     * // Create one Docente
     * const Docente = await prisma.docente.create({
     *   data: {
     *     // ... data to create a Docente
     *   }
     * })
     * 
     */
    create<T extends DocenteCreateArgs>(args: SelectSubset<T, DocenteCreateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Docentes.
     * @param {DocenteCreateManyArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocenteCreateManyArgs>(args?: SelectSubset<T, DocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Docentes and returns the data saved in the database.
     * @param {DocenteCreateManyAndReturnArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Docentes and only return the `id`
     * const docenteWithIdOnly = await prisma.docente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Docente.
     * @param {DocenteDeleteArgs} args - Arguments to delete one Docente.
     * @example
     * // Delete one Docente
     * const Docente = await prisma.docente.delete({
     *   where: {
     *     // ... filter to delete one Docente
     *   }
     * })
     * 
     */
    delete<T extends DocenteDeleteArgs>(args: SelectSubset<T, DocenteDeleteArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Docente.
     * @param {DocenteUpdateArgs} args - Arguments to update one Docente.
     * @example
     * // Update one Docente
     * const docente = await prisma.docente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocenteUpdateArgs>(args: SelectSubset<T, DocenteUpdateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Docentes.
     * @param {DocenteDeleteManyArgs} args - Arguments to filter Docentes to delete.
     * @example
     * // Delete a few Docentes
     * const { count } = await prisma.docente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocenteDeleteManyArgs>(args?: SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocenteUpdateManyArgs>(args: SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes and returns the data updated in the database.
     * @param {DocenteUpdateManyAndReturnArgs} args - Arguments to update many Docentes.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Docentes and only return the `id`
     * const docenteWithIdOnly = await prisma.docente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Docente.
     * @param {DocenteUpsertArgs} args - Arguments to update or create a Docente.
     * @example
     * // Update or create a Docente
     * const docente = await prisma.docente.upsert({
     *   create: {
     *     // ... data to create a Docente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente we want to update
     *   }
     * })
     */
    upsert<T extends DocenteUpsertArgs>(args: SelectSubset<T, DocenteUpsertArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCountArgs} args - Arguments to filter Docentes to count.
     * @example
     * // Count the number of Docentes
     * const count = await prisma.docente.count({
     *   where: {
     *     // ... the filter for the Docentes we want to count
     *   }
     * })
    **/
    count<T extends DocenteCountArgs>(
      args?: Subset<T, DocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocenteAggregateArgs>(args: Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>

    /**
     * Group by Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteGroupByArgs['orderBy'] }
        : { orderBy?: DocenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente model
   */
  readonly fields: DocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dictan<T extends Docente$dictanArgs<ExtArgs> = {}>(args?: Subset<T, Docente$dictanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    docentesCarrera<T extends Docente$docentesCarreraArgs<ExtArgs> = {}>(args?: Subset<T, Docente$docentesCarreraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Docente model
   */
  interface DocenteFieldRefs {
    readonly id: FieldRef<"Docente", 'Int'>
    readonly nombre: FieldRef<"Docente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Docente findUnique
   */
  export type DocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findUniqueOrThrow
   */
  export type DocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findFirst
   */
  export type DocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findFirstOrThrow
   */
  export type DocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findMany
   */
  export type DocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docentes to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente create
   */
  export type DocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente.
     */
    data: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
  }

  /**
   * Docente createMany
   */
  export type DocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente createManyAndReturn
   */
  export type DocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente update
   */
  export type DocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente.
     */
    data: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
    /**
     * Choose, which Docente to update.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente updateMany
   */
  export type DocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente updateManyAndReturn
   */
  export type DocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente upsert
   */
  export type DocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente to update in case it exists.
     */
    where: DocenteWhereUniqueInput
    /**
     * In case the Docente found by the `where` argument doesn't exist, create a new Docente with this data.
     */
    create: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
    /**
     * In case the Docente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
  }

  /**
   * Docente delete
   */
  export type DocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter which Docente to delete.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente deleteMany
   */
  export type DocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docentes to delete
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to delete.
     */
    limit?: number
  }

  /**
   * Docente.dictan
   */
  export type Docente$dictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    where?: DictanWhereInput
    orderBy?: DictanOrderByWithRelationInput | DictanOrderByWithRelationInput[]
    cursor?: DictanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictanScalarFieldEnum | DictanScalarFieldEnum[]
  }

  /**
   * Docente.docentesCarrera
   */
  export type Docente$docentesCarreraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    where?: DocenteCarreraWhereInput
    orderBy?: DocenteCarreraOrderByWithRelationInput | DocenteCarreraOrderByWithRelationInput[]
    cursor?: DocenteCarreraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocenteCarreraScalarFieldEnum | DocenteCarreraScalarFieldEnum[]
  }

  /**
   * Docente without action
   */
  export type DocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
  }


  /**
   * Model Registro
   */

  export type AggregateRegistro = {
    _count: RegistroCountAggregateOutputType | null
    _avg: RegistroAvgAggregateOutputType | null
    _sum: RegistroSumAggregateOutputType | null
    _min: RegistroMinAggregateOutputType | null
    _max: RegistroMaxAggregateOutputType | null
  }

  export type RegistroAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type RegistroSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type RegistroMinAggregateOutputType = {
    id: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type RegistroMaxAggregateOutputType = {
    id: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type RegistroCountAggregateOutputType = {
    id: number
    carreraId: number
    materiaId: number
    _all: number
  }


  export type RegistroAvgAggregateInputType = {
    id?: true
    carreraId?: true
    materiaId?: true
  }

  export type RegistroSumAggregateInputType = {
    id?: true
    carreraId?: true
    materiaId?: true
  }

  export type RegistroMinAggregateInputType = {
    id?: true
    carreraId?: true
    materiaId?: true
  }

  export type RegistroMaxAggregateInputType = {
    id?: true
    carreraId?: true
    materiaId?: true
  }

  export type RegistroCountAggregateInputType = {
    id?: true
    carreraId?: true
    materiaId?: true
    _all?: true
  }

  export type RegistroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registro to aggregate.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registros
    **/
    _count?: true | RegistroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroMaxAggregateInputType
  }

  export type GetRegistroAggregateType<T extends RegistroAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistro[P]>
      : GetScalarType<T[P], AggregateRegistro[P]>
  }




  export type RegistroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithAggregationInput | RegistroOrderByWithAggregationInput[]
    by: RegistroScalarFieldEnum[] | RegistroScalarFieldEnum
    having?: RegistroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroCountAggregateInputType | true
    _avg?: RegistroAvgAggregateInputType
    _sum?: RegistroSumAggregateInputType
    _min?: RegistroMinAggregateInputType
    _max?: RegistroMaxAggregateInputType
  }

  export type RegistroGroupByOutputType = {
    id: number
    carreraId: number
    materiaId: number
    _count: RegistroCountAggregateOutputType | null
    _avg: RegistroAvgAggregateOutputType | null
    _sum: RegistroSumAggregateOutputType | null
    _min: RegistroMinAggregateOutputType | null
    _max: RegistroMaxAggregateOutputType | null
  }

  type GetRegistroGroupByPayload<T extends RegistroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroGroupByOutputType[P]>
        }
      >
    >


  export type RegistroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    materiaId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    materiaId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    materiaId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectScalar = {
    id?: boolean
    carreraId?: boolean
    materiaId?: boolean
  }

  export type RegistroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carreraId" | "materiaId", ExtArgs["result"]["registro"]>
  export type RegistroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type RegistroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type RegistroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $RegistroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registro"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carreraId: number
      materiaId: number
    }, ExtArgs["result"]["registro"]>
    composites: {}
  }

  type RegistroGetPayload<S extends boolean | null | undefined | RegistroDefaultArgs> = $Result.GetResult<Prisma.$RegistroPayload, S>

  type RegistroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroCountAggregateInputType | true
    }

  export interface RegistroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registro'], meta: { name: 'Registro' } }
    /**
     * Find zero or one Registro that matches the filter.
     * @param {RegistroFindUniqueArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroFindUniqueArgs>(args: SelectSubset<T, RegistroFindUniqueArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroFindUniqueOrThrowArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindFirstArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroFindFirstArgs>(args?: SelectSubset<T, RegistroFindFirstArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindFirstOrThrowArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registros
     * const registros = await prisma.registro.findMany()
     * 
     * // Get first 10 Registros
     * const registros = await prisma.registro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroWithIdOnly = await prisma.registro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroFindManyArgs>(args?: SelectSubset<T, RegistroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registro.
     * @param {RegistroCreateArgs} args - Arguments to create a Registro.
     * @example
     * // Create one Registro
     * const Registro = await prisma.registro.create({
     *   data: {
     *     // ... data to create a Registro
     *   }
     * })
     * 
     */
    create<T extends RegistroCreateArgs>(args: SelectSubset<T, RegistroCreateArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registros.
     * @param {RegistroCreateManyArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registro = await prisma.registro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroCreateManyArgs>(args?: SelectSubset<T, RegistroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registros and returns the data saved in the database.
     * @param {RegistroCreateManyAndReturnArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registro = await prisma.registro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registros and only return the `id`
     * const registroWithIdOnly = await prisma.registro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registro.
     * @param {RegistroDeleteArgs} args - Arguments to delete one Registro.
     * @example
     * // Delete one Registro
     * const Registro = await prisma.registro.delete({
     *   where: {
     *     // ... filter to delete one Registro
     *   }
     * })
     * 
     */
    delete<T extends RegistroDeleteArgs>(args: SelectSubset<T, RegistroDeleteArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registro.
     * @param {RegistroUpdateArgs} args - Arguments to update one Registro.
     * @example
     * // Update one Registro
     * const registro = await prisma.registro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroUpdateArgs>(args: SelectSubset<T, RegistroUpdateArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registros.
     * @param {RegistroDeleteManyArgs} args - Arguments to filter Registros to delete.
     * @example
     * // Delete a few Registros
     * const { count } = await prisma.registro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroDeleteManyArgs>(args?: SelectSubset<T, RegistroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registros
     * const registro = await prisma.registro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroUpdateManyArgs>(args: SelectSubset<T, RegistroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros and returns the data updated in the database.
     * @param {RegistroUpdateManyAndReturnArgs} args - Arguments to update many Registros.
     * @example
     * // Update many Registros
     * const registro = await prisma.registro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registros and only return the `id`
     * const registroWithIdOnly = await prisma.registro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registro.
     * @param {RegistroUpsertArgs} args - Arguments to update or create a Registro.
     * @example
     * // Update or create a Registro
     * const registro = await prisma.registro.upsert({
     *   create: {
     *     // ... data to create a Registro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registro we want to update
     *   }
     * })
     */
    upsert<T extends RegistroUpsertArgs>(args: SelectSubset<T, RegistroUpsertArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCountArgs} args - Arguments to filter Registros to count.
     * @example
     * // Count the number of Registros
     * const count = await prisma.registro.count({
     *   where: {
     *     // ... the filter for the Registros we want to count
     *   }
     * })
    **/
    count<T extends RegistroCountArgs>(
      args?: Subset<T, RegistroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistroAggregateArgs>(args: Subset<T, RegistroAggregateArgs>): Prisma.PrismaPromise<GetRegistroAggregateType<T>>

    /**
     * Group by Registro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroGroupByArgs['orderBy'] }
        : { orderBy?: RegistroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registro model
   */
  readonly fields: RegistroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registro model
   */
  interface RegistroFieldRefs {
    readonly id: FieldRef<"Registro", 'Int'>
    readonly carreraId: FieldRef<"Registro", 'Int'>
    readonly materiaId: FieldRef<"Registro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Registro findUnique
   */
  export type RegistroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro findUniqueOrThrow
   */
  export type RegistroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro findFirst
   */
  export type RegistroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro findFirstOrThrow
   */
  export type RegistroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro findMany
   */
  export type RegistroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro create
   */
  export type RegistroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The data needed to create a Registro.
     */
    data: XOR<RegistroCreateInput, RegistroUncheckedCreateInput>
  }

  /**
   * Registro createMany
   */
  export type RegistroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registros.
     */
    data: RegistroCreateManyInput | RegistroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registro createManyAndReturn
   */
  export type RegistroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * The data used to create many Registros.
     */
    data: RegistroCreateManyInput | RegistroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro update
   */
  export type RegistroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The data needed to update a Registro.
     */
    data: XOR<RegistroUpdateInput, RegistroUncheckedUpdateInput>
    /**
     * Choose, which Registro to update.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro updateMany
   */
  export type RegistroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
  }

  /**
   * Registro updateManyAndReturn
   */
  export type RegistroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro upsert
   */
  export type RegistroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The filter to search for the Registro to update in case it exists.
     */
    where: RegistroWhereUniqueInput
    /**
     * In case the Registro found by the `where` argument doesn't exist, create a new Registro with this data.
     */
    create: XOR<RegistroCreateInput, RegistroUncheckedCreateInput>
    /**
     * In case the Registro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroUpdateInput, RegistroUncheckedUpdateInput>
  }

  /**
   * Registro delete
   */
  export type RegistroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter which Registro to delete.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro deleteMany
   */
  export type RegistroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registros to delete
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to delete.
     */
    limit?: number
  }

  /**
   * Registro without action
   */
  export type RegistroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
  }


  /**
   * Model Inscripcion
   */

  export type AggregateInscripcion = {
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  export type InscripcionAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionMinAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionMaxAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionCountAggregateOutputType = {
    id: number
    estudianteId: number
    materiaId: number
    _all: number
  }


  export type InscripcionAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionSumAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionMinAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionMaxAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionCountAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
    _all?: true
  }

  export type InscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcion to aggregate.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscripcions
    **/
    _count?: true | InscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionMaxAggregateInputType
  }

  export type GetInscripcionAggregateType<T extends InscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcion[P]>
      : GetScalarType<T[P], AggregateInscripcion[P]>
  }




  export type InscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithAggregationInput | InscripcionOrderByWithAggregationInput[]
    by: InscripcionScalarFieldEnum[] | InscripcionScalarFieldEnum
    having?: InscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionCountAggregateInputType | true
    _avg?: InscripcionAvgAggregateInputType
    _sum?: InscripcionSumAggregateInputType
    _min?: InscripcionMinAggregateInputType
    _max?: InscripcionMaxAggregateInputType
  }

  export type InscripcionGroupByOutputType = {
    id: number
    estudianteId: number
    materiaId: number
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  type GetInscripcionGroupByPayload<T extends InscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectScalar = {
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
  }

  export type InscripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estudianteId" | "materiaId", ExtArgs["result"]["inscripcion"]>
  export type InscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $InscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscripcion"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estudianteId: number
      materiaId: number
    }, ExtArgs["result"]["inscripcion"]>
    composites: {}
  }

  type InscripcionGetPayload<S extends boolean | null | undefined | InscripcionDefaultArgs> = $Result.GetResult<Prisma.$InscripcionPayload, S>

  type InscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionCountAggregateInputType | true
    }

  export interface InscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscripcion'], meta: { name: 'Inscripcion' } }
    /**
     * Find zero or one Inscripcion that matches the filter.
     * @param {InscripcionFindUniqueArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionFindUniqueArgs>(args: SelectSubset<T, InscripcionFindUniqueArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscripcionFindUniqueOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionFindFirstArgs>(args?: SelectSubset<T, InscripcionFindFirstArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany()
     * 
     * // Get first 10 Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscripcionFindManyArgs>(args?: SelectSubset<T, InscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscripcion.
     * @param {InscripcionCreateArgs} args - Arguments to create a Inscripcion.
     * @example
     * // Create one Inscripcion
     * const Inscripcion = await prisma.inscripcion.create({
     *   data: {
     *     // ... data to create a Inscripcion
     *   }
     * })
     * 
     */
    create<T extends InscripcionCreateArgs>(args: SelectSubset<T, InscripcionCreateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscripcions.
     * @param {InscripcionCreateManyArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionCreateManyArgs>(args?: SelectSubset<T, InscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscripcions and returns the data saved in the database.
     * @param {InscripcionCreateManyAndReturnArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, InscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscripcion.
     * @param {InscripcionDeleteArgs} args - Arguments to delete one Inscripcion.
     * @example
     * // Delete one Inscripcion
     * const Inscripcion = await prisma.inscripcion.delete({
     *   where: {
     *     // ... filter to delete one Inscripcion
     *   }
     * })
     * 
     */
    delete<T extends InscripcionDeleteArgs>(args: SelectSubset<T, InscripcionDeleteArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscripcion.
     * @param {InscripcionUpdateArgs} args - Arguments to update one Inscripcion.
     * @example
     * // Update one Inscripcion
     * const inscripcion = await prisma.inscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionUpdateArgs>(args: SelectSubset<T, InscripcionUpdateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscripcions.
     * @param {InscripcionDeleteManyArgs} args - Arguments to filter Inscripcions to delete.
     * @example
     * // Delete a few Inscripcions
     * const { count } = await prisma.inscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionDeleteManyArgs>(args?: SelectSubset<T, InscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionUpdateManyArgs>(args: SelectSubset<T, InscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions and returns the data updated in the database.
     * @param {InscripcionUpdateManyAndReturnArgs} args - Arguments to update many Inscripcions.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InscripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, InscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscripcion.
     * @param {InscripcionUpsertArgs} args - Arguments to update or create a Inscripcion.
     * @example
     * // Update or create a Inscripcion
     * const inscripcion = await prisma.inscripcion.upsert({
     *   create: {
     *     // ... data to create a Inscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripcion we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionUpsertArgs>(args: SelectSubset<T, InscripcionUpsertArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionCountArgs} args - Arguments to filter Inscripcions to count.
     * @example
     * // Count the number of Inscripcions
     * const count = await prisma.inscripcion.count({
     *   where: {
     *     // ... the filter for the Inscripcions we want to count
     *   }
     * })
    **/
    count<T extends InscripcionCountArgs>(
      args?: Subset<T, InscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InscripcionAggregateArgs>(args: Subset<T, InscripcionAggregateArgs>): Prisma.PrismaPromise<GetInscripcionAggregateType<T>>

    /**
     * Group by Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscripcion model
   */
  readonly fields: InscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inscripcion model
   */
  interface InscripcionFieldRefs {
    readonly id: FieldRef<"Inscripcion", 'Int'>
    readonly estudianteId: FieldRef<"Inscripcion", 'Int'>
    readonly materiaId: FieldRef<"Inscripcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inscripcion findUnique
   */
  export type InscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findUniqueOrThrow
   */
  export type InscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findFirst
   */
  export type InscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findFirstOrThrow
   */
  export type InscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findMany
   */
  export type InscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcions to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion create
   */
  export type InscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscripcion.
     */
    data: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
  }

  /**
   * Inscripcion createMany
   */
  export type InscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscripcion createManyAndReturn
   */
  export type InscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion update
   */
  export type InscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscripcion.
     */
    data: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
    /**
     * Choose, which Inscripcion to update.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion updateMany
   */
  export type InscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
  }

  /**
   * Inscripcion updateManyAndReturn
   */
  export type InscripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion upsert
   */
  export type InscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscripcion to update in case it exists.
     */
    where: InscripcionWhereUniqueInput
    /**
     * In case the Inscripcion found by the `where` argument doesn't exist, create a new Inscripcion with this data.
     */
    create: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
    /**
     * In case the Inscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
  }

  /**
   * Inscripcion delete
   */
  export type InscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter which Inscripcion to delete.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion deleteMany
   */
  export type InscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcions to delete
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to delete.
     */
    limit?: number
  }

  /**
   * Inscripcion without action
   */
  export type InscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
  }


  /**
   * Model Dictan
   */

  export type AggregateDictan = {
    _count: DictanCountAggregateOutputType | null
    _avg: DictanAvgAggregateOutputType | null
    _sum: DictanSumAggregateOutputType | null
    _min: DictanMinAggregateOutputType | null
    _max: DictanMaxAggregateOutputType | null
  }

  export type DictanAvgAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictanSumAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictanMinAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictanMaxAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictanCountAggregateOutputType = {
    id: number
    docenteId: number
    materiaId: number
    _all: number
  }


  export type DictanAvgAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictanSumAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictanMinAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictanMaxAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictanCountAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
    _all?: true
  }

  export type DictanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dictan to aggregate.
     */
    where?: DictanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictans to fetch.
     */
    orderBy?: DictanOrderByWithRelationInput | DictanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dictans
    **/
    _count?: true | DictanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictanMaxAggregateInputType
  }

  export type GetDictanAggregateType<T extends DictanAggregateArgs> = {
        [P in keyof T & keyof AggregateDictan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictan[P]>
      : GetScalarType<T[P], AggregateDictan[P]>
  }




  export type DictanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictanWhereInput
    orderBy?: DictanOrderByWithAggregationInput | DictanOrderByWithAggregationInput[]
    by: DictanScalarFieldEnum[] | DictanScalarFieldEnum
    having?: DictanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictanCountAggregateInputType | true
    _avg?: DictanAvgAggregateInputType
    _sum?: DictanSumAggregateInputType
    _min?: DictanMinAggregateInputType
    _max?: DictanMaxAggregateInputType
  }

  export type DictanGroupByOutputType = {
    id: number
    docenteId: number
    materiaId: number
    _count: DictanCountAggregateOutputType | null
    _avg: DictanAvgAggregateOutputType | null
    _sum: DictanSumAggregateOutputType | null
    _min: DictanMinAggregateOutputType | null
    _max: DictanMaxAggregateOutputType | null
  }

  type GetDictanGroupByPayload<T extends DictanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictanGroupByOutputType[P]>
            : GetScalarType<T[P], DictanGroupByOutputType[P]>
        }
      >
    >


  export type DictanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictan"]>

  export type DictanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictan"]>

  export type DictanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictan"]>

  export type DictanSelectScalar = {
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
  }

  export type DictanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "docenteId" | "materiaId", ExtArgs["result"]["dictan"]>
  export type DictanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type DictanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type DictanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $DictanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dictan"
    objects: {
      docente: Prisma.$DocentePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      docenteId: number
      materiaId: number
    }, ExtArgs["result"]["dictan"]>
    composites: {}
  }

  type DictanGetPayload<S extends boolean | null | undefined | DictanDefaultArgs> = $Result.GetResult<Prisma.$DictanPayload, S>

  type DictanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictanCountAggregateInputType | true
    }

  export interface DictanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dictan'], meta: { name: 'Dictan' } }
    /**
     * Find zero or one Dictan that matches the filter.
     * @param {DictanFindUniqueArgs} args - Arguments to find a Dictan
     * @example
     * // Get one Dictan
     * const dictan = await prisma.dictan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictanFindUniqueArgs>(args: SelectSubset<T, DictanFindUniqueArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dictan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictanFindUniqueOrThrowArgs} args - Arguments to find a Dictan
     * @example
     * // Get one Dictan
     * const dictan = await prisma.dictan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictanFindUniqueOrThrowArgs>(args: SelectSubset<T, DictanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dictan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanFindFirstArgs} args - Arguments to find a Dictan
     * @example
     * // Get one Dictan
     * const dictan = await prisma.dictan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictanFindFirstArgs>(args?: SelectSubset<T, DictanFindFirstArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dictan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanFindFirstOrThrowArgs} args - Arguments to find a Dictan
     * @example
     * // Get one Dictan
     * const dictan = await prisma.dictan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictanFindFirstOrThrowArgs>(args?: SelectSubset<T, DictanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dictans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dictans
     * const dictans = await prisma.dictan.findMany()
     * 
     * // Get first 10 Dictans
     * const dictans = await prisma.dictan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dictanWithIdOnly = await prisma.dictan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DictanFindManyArgs>(args?: SelectSubset<T, DictanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dictan.
     * @param {DictanCreateArgs} args - Arguments to create a Dictan.
     * @example
     * // Create one Dictan
     * const Dictan = await prisma.dictan.create({
     *   data: {
     *     // ... data to create a Dictan
     *   }
     * })
     * 
     */
    create<T extends DictanCreateArgs>(args: SelectSubset<T, DictanCreateArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dictans.
     * @param {DictanCreateManyArgs} args - Arguments to create many Dictans.
     * @example
     * // Create many Dictans
     * const dictan = await prisma.dictan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictanCreateManyArgs>(args?: SelectSubset<T, DictanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dictans and returns the data saved in the database.
     * @param {DictanCreateManyAndReturnArgs} args - Arguments to create many Dictans.
     * @example
     * // Create many Dictans
     * const dictan = await prisma.dictan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dictans and only return the `id`
     * const dictanWithIdOnly = await prisma.dictan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictanCreateManyAndReturnArgs>(args?: SelectSubset<T, DictanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dictan.
     * @param {DictanDeleteArgs} args - Arguments to delete one Dictan.
     * @example
     * // Delete one Dictan
     * const Dictan = await prisma.dictan.delete({
     *   where: {
     *     // ... filter to delete one Dictan
     *   }
     * })
     * 
     */
    delete<T extends DictanDeleteArgs>(args: SelectSubset<T, DictanDeleteArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dictan.
     * @param {DictanUpdateArgs} args - Arguments to update one Dictan.
     * @example
     * // Update one Dictan
     * const dictan = await prisma.dictan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictanUpdateArgs>(args: SelectSubset<T, DictanUpdateArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dictans.
     * @param {DictanDeleteManyArgs} args - Arguments to filter Dictans to delete.
     * @example
     * // Delete a few Dictans
     * const { count } = await prisma.dictan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictanDeleteManyArgs>(args?: SelectSubset<T, DictanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dictans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dictans
     * const dictan = await prisma.dictan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictanUpdateManyArgs>(args: SelectSubset<T, DictanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dictans and returns the data updated in the database.
     * @param {DictanUpdateManyAndReturnArgs} args - Arguments to update many Dictans.
     * @example
     * // Update many Dictans
     * const dictan = await prisma.dictan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dictans and only return the `id`
     * const dictanWithIdOnly = await prisma.dictan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictanUpdateManyAndReturnArgs>(args: SelectSubset<T, DictanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dictan.
     * @param {DictanUpsertArgs} args - Arguments to update or create a Dictan.
     * @example
     * // Update or create a Dictan
     * const dictan = await prisma.dictan.upsert({
     *   create: {
     *     // ... data to create a Dictan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dictan we want to update
     *   }
     * })
     */
    upsert<T extends DictanUpsertArgs>(args: SelectSubset<T, DictanUpsertArgs<ExtArgs>>): Prisma__DictanClient<$Result.GetResult<Prisma.$DictanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dictans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanCountArgs} args - Arguments to filter Dictans to count.
     * @example
     * // Count the number of Dictans
     * const count = await prisma.dictan.count({
     *   where: {
     *     // ... the filter for the Dictans we want to count
     *   }
     * })
    **/
    count<T extends DictanCountArgs>(
      args?: Subset<T, DictanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dictan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictanAggregateArgs>(args: Subset<T, DictanAggregateArgs>): Prisma.PrismaPromise<GetDictanAggregateType<T>>

    /**
     * Group by Dictan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictanGroupByArgs['orderBy'] }
        : { orderBy?: DictanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dictan model
   */
  readonly fields: DictanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dictan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dictan model
   */
  interface DictanFieldRefs {
    readonly id: FieldRef<"Dictan", 'Int'>
    readonly docenteId: FieldRef<"Dictan", 'Int'>
    readonly materiaId: FieldRef<"Dictan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dictan findUnique
   */
  export type DictanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * Filter, which Dictan to fetch.
     */
    where: DictanWhereUniqueInput
  }

  /**
   * Dictan findUniqueOrThrow
   */
  export type DictanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * Filter, which Dictan to fetch.
     */
    where: DictanWhereUniqueInput
  }

  /**
   * Dictan findFirst
   */
  export type DictanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * Filter, which Dictan to fetch.
     */
    where?: DictanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictans to fetch.
     */
    orderBy?: DictanOrderByWithRelationInput | DictanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dictans.
     */
    cursor?: DictanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dictans.
     */
    distinct?: DictanScalarFieldEnum | DictanScalarFieldEnum[]
  }

  /**
   * Dictan findFirstOrThrow
   */
  export type DictanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * Filter, which Dictan to fetch.
     */
    where?: DictanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictans to fetch.
     */
    orderBy?: DictanOrderByWithRelationInput | DictanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dictans.
     */
    cursor?: DictanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dictans.
     */
    distinct?: DictanScalarFieldEnum | DictanScalarFieldEnum[]
  }

  /**
   * Dictan findMany
   */
  export type DictanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * Filter, which Dictans to fetch.
     */
    where?: DictanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictans to fetch.
     */
    orderBy?: DictanOrderByWithRelationInput | DictanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dictans.
     */
    cursor?: DictanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictans.
     */
    skip?: number
    distinct?: DictanScalarFieldEnum | DictanScalarFieldEnum[]
  }

  /**
   * Dictan create
   */
  export type DictanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * The data needed to create a Dictan.
     */
    data: XOR<DictanCreateInput, DictanUncheckedCreateInput>
  }

  /**
   * Dictan createMany
   */
  export type DictanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dictans.
     */
    data: DictanCreateManyInput | DictanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dictan createManyAndReturn
   */
  export type DictanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * The data used to create many Dictans.
     */
    data: DictanCreateManyInput | DictanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dictan update
   */
  export type DictanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * The data needed to update a Dictan.
     */
    data: XOR<DictanUpdateInput, DictanUncheckedUpdateInput>
    /**
     * Choose, which Dictan to update.
     */
    where: DictanWhereUniqueInput
  }

  /**
   * Dictan updateMany
   */
  export type DictanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dictans.
     */
    data: XOR<DictanUpdateManyMutationInput, DictanUncheckedUpdateManyInput>
    /**
     * Filter which Dictans to update
     */
    where?: DictanWhereInput
    /**
     * Limit how many Dictans to update.
     */
    limit?: number
  }

  /**
   * Dictan updateManyAndReturn
   */
  export type DictanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * The data used to update Dictans.
     */
    data: XOR<DictanUpdateManyMutationInput, DictanUncheckedUpdateManyInput>
    /**
     * Filter which Dictans to update
     */
    where?: DictanWhereInput
    /**
     * Limit how many Dictans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dictan upsert
   */
  export type DictanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * The filter to search for the Dictan to update in case it exists.
     */
    where: DictanWhereUniqueInput
    /**
     * In case the Dictan found by the `where` argument doesn't exist, create a new Dictan with this data.
     */
    create: XOR<DictanCreateInput, DictanUncheckedCreateInput>
    /**
     * In case the Dictan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictanUpdateInput, DictanUncheckedUpdateInput>
  }

  /**
   * Dictan delete
   */
  export type DictanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
    /**
     * Filter which Dictan to delete.
     */
    where: DictanWhereUniqueInput
  }

  /**
   * Dictan deleteMany
   */
  export type DictanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dictans to delete
     */
    where?: DictanWhereInput
    /**
     * Limit how many Dictans to delete.
     */
    limit?: number
  }

  /**
   * Dictan without action
   */
  export type DictanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictan
     */
    select?: DictanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictan
     */
    omit?: DictanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictanInclude<ExtArgs> | null
  }


  /**
   * Model DocenteCarrera
   */

  export type AggregateDocenteCarrera = {
    _count: DocenteCarreraCountAggregateOutputType | null
    _avg: DocenteCarreraAvgAggregateOutputType | null
    _sum: DocenteCarreraSumAggregateOutputType | null
    _min: DocenteCarreraMinAggregateOutputType | null
    _max: DocenteCarreraMaxAggregateOutputType | null
  }

  export type DocenteCarreraAvgAggregateOutputType = {
    id: number | null
    docenteId: number | null
    carreraId: number | null
  }

  export type DocenteCarreraSumAggregateOutputType = {
    id: number | null
    docenteId: number | null
    carreraId: number | null
  }

  export type DocenteCarreraMinAggregateOutputType = {
    id: number | null
    docenteId: number | null
    carreraId: number | null
  }

  export type DocenteCarreraMaxAggregateOutputType = {
    id: number | null
    docenteId: number | null
    carreraId: number | null
  }

  export type DocenteCarreraCountAggregateOutputType = {
    id: number
    docenteId: number
    carreraId: number
    _all: number
  }


  export type DocenteCarreraAvgAggregateInputType = {
    id?: true
    docenteId?: true
    carreraId?: true
  }

  export type DocenteCarreraSumAggregateInputType = {
    id?: true
    docenteId?: true
    carreraId?: true
  }

  export type DocenteCarreraMinAggregateInputType = {
    id?: true
    docenteId?: true
    carreraId?: true
  }

  export type DocenteCarreraMaxAggregateInputType = {
    id?: true
    docenteId?: true
    carreraId?: true
  }

  export type DocenteCarreraCountAggregateInputType = {
    id?: true
    docenteId?: true
    carreraId?: true
    _all?: true
  }

  export type DocenteCarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocenteCarrera to aggregate.
     */
    where?: DocenteCarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocenteCarreras to fetch.
     */
    orderBy?: DocenteCarreraOrderByWithRelationInput | DocenteCarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteCarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocenteCarreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocenteCarreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocenteCarreras
    **/
    _count?: true | DocenteCarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocenteCarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocenteCarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteCarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteCarreraMaxAggregateInputType
  }

  export type GetDocenteCarreraAggregateType<T extends DocenteCarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateDocenteCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocenteCarrera[P]>
      : GetScalarType<T[P], AggregateDocenteCarrera[P]>
  }




  export type DocenteCarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteCarreraWhereInput
    orderBy?: DocenteCarreraOrderByWithAggregationInput | DocenteCarreraOrderByWithAggregationInput[]
    by: DocenteCarreraScalarFieldEnum[] | DocenteCarreraScalarFieldEnum
    having?: DocenteCarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCarreraCountAggregateInputType | true
    _avg?: DocenteCarreraAvgAggregateInputType
    _sum?: DocenteCarreraSumAggregateInputType
    _min?: DocenteCarreraMinAggregateInputType
    _max?: DocenteCarreraMaxAggregateInputType
  }

  export type DocenteCarreraGroupByOutputType = {
    id: number
    docenteId: number
    carreraId: number
    _count: DocenteCarreraCountAggregateOutputType | null
    _avg: DocenteCarreraAvgAggregateOutputType | null
    _sum: DocenteCarreraSumAggregateOutputType | null
    _min: DocenteCarreraMinAggregateOutputType | null
    _max: DocenteCarreraMaxAggregateOutputType | null
  }

  type GetDocenteCarreraGroupByPayload<T extends DocenteCarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteCarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteCarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteCarreraGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteCarreraGroupByOutputType[P]>
        }
      >
    >


  export type DocenteCarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    carreraId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docenteCarrera"]>

  export type DocenteCarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    carreraId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docenteCarrera"]>

  export type DocenteCarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    carreraId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docenteCarrera"]>

  export type DocenteCarreraSelectScalar = {
    id?: boolean
    docenteId?: boolean
    carreraId?: boolean
  }

  export type DocenteCarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "docenteId" | "carreraId", ExtArgs["result"]["docenteCarrera"]>
  export type DocenteCarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type DocenteCarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type DocenteCarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $DocenteCarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocenteCarrera"
    objects: {
      docente: Prisma.$DocentePayload<ExtArgs>
      carrera: Prisma.$CarreraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      docenteId: number
      carreraId: number
    }, ExtArgs["result"]["docenteCarrera"]>
    composites: {}
  }

  type DocenteCarreraGetPayload<S extends boolean | null | undefined | DocenteCarreraDefaultArgs> = $Result.GetResult<Prisma.$DocenteCarreraPayload, S>

  type DocenteCarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocenteCarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocenteCarreraCountAggregateInputType | true
    }

  export interface DocenteCarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocenteCarrera'], meta: { name: 'DocenteCarrera' } }
    /**
     * Find zero or one DocenteCarrera that matches the filter.
     * @param {DocenteCarreraFindUniqueArgs} args - Arguments to find a DocenteCarrera
     * @example
     * // Get one DocenteCarrera
     * const docenteCarrera = await prisma.docenteCarrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocenteCarreraFindUniqueArgs>(args: SelectSubset<T, DocenteCarreraFindUniqueArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocenteCarrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocenteCarreraFindUniqueOrThrowArgs} args - Arguments to find a DocenteCarrera
     * @example
     * // Get one DocenteCarrera
     * const docenteCarrera = await prisma.docenteCarrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocenteCarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, DocenteCarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocenteCarrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraFindFirstArgs} args - Arguments to find a DocenteCarrera
     * @example
     * // Get one DocenteCarrera
     * const docenteCarrera = await prisma.docenteCarrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocenteCarreraFindFirstArgs>(args?: SelectSubset<T, DocenteCarreraFindFirstArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocenteCarrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraFindFirstOrThrowArgs} args - Arguments to find a DocenteCarrera
     * @example
     * // Get one DocenteCarrera
     * const docenteCarrera = await prisma.docenteCarrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocenteCarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, DocenteCarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocenteCarreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocenteCarreras
     * const docenteCarreras = await prisma.docenteCarrera.findMany()
     * 
     * // Get first 10 DocenteCarreras
     * const docenteCarreras = await prisma.docenteCarrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docenteCarreraWithIdOnly = await prisma.docenteCarrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocenteCarreraFindManyArgs>(args?: SelectSubset<T, DocenteCarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocenteCarrera.
     * @param {DocenteCarreraCreateArgs} args - Arguments to create a DocenteCarrera.
     * @example
     * // Create one DocenteCarrera
     * const DocenteCarrera = await prisma.docenteCarrera.create({
     *   data: {
     *     // ... data to create a DocenteCarrera
     *   }
     * })
     * 
     */
    create<T extends DocenteCarreraCreateArgs>(args: SelectSubset<T, DocenteCarreraCreateArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocenteCarreras.
     * @param {DocenteCarreraCreateManyArgs} args - Arguments to create many DocenteCarreras.
     * @example
     * // Create many DocenteCarreras
     * const docenteCarrera = await prisma.docenteCarrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocenteCarreraCreateManyArgs>(args?: SelectSubset<T, DocenteCarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocenteCarreras and returns the data saved in the database.
     * @param {DocenteCarreraCreateManyAndReturnArgs} args - Arguments to create many DocenteCarreras.
     * @example
     * // Create many DocenteCarreras
     * const docenteCarrera = await prisma.docenteCarrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocenteCarreras and only return the `id`
     * const docenteCarreraWithIdOnly = await prisma.docenteCarrera.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocenteCarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, DocenteCarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocenteCarrera.
     * @param {DocenteCarreraDeleteArgs} args - Arguments to delete one DocenteCarrera.
     * @example
     * // Delete one DocenteCarrera
     * const DocenteCarrera = await prisma.docenteCarrera.delete({
     *   where: {
     *     // ... filter to delete one DocenteCarrera
     *   }
     * })
     * 
     */
    delete<T extends DocenteCarreraDeleteArgs>(args: SelectSubset<T, DocenteCarreraDeleteArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocenteCarrera.
     * @param {DocenteCarreraUpdateArgs} args - Arguments to update one DocenteCarrera.
     * @example
     * // Update one DocenteCarrera
     * const docenteCarrera = await prisma.docenteCarrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocenteCarreraUpdateArgs>(args: SelectSubset<T, DocenteCarreraUpdateArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocenteCarreras.
     * @param {DocenteCarreraDeleteManyArgs} args - Arguments to filter DocenteCarreras to delete.
     * @example
     * // Delete a few DocenteCarreras
     * const { count } = await prisma.docenteCarrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocenteCarreraDeleteManyArgs>(args?: SelectSubset<T, DocenteCarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocenteCarreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocenteCarreras
     * const docenteCarrera = await prisma.docenteCarrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocenteCarreraUpdateManyArgs>(args: SelectSubset<T, DocenteCarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocenteCarreras and returns the data updated in the database.
     * @param {DocenteCarreraUpdateManyAndReturnArgs} args - Arguments to update many DocenteCarreras.
     * @example
     * // Update many DocenteCarreras
     * const docenteCarrera = await prisma.docenteCarrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocenteCarreras and only return the `id`
     * const docenteCarreraWithIdOnly = await prisma.docenteCarrera.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocenteCarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, DocenteCarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocenteCarrera.
     * @param {DocenteCarreraUpsertArgs} args - Arguments to update or create a DocenteCarrera.
     * @example
     * // Update or create a DocenteCarrera
     * const docenteCarrera = await prisma.docenteCarrera.upsert({
     *   create: {
     *     // ... data to create a DocenteCarrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocenteCarrera we want to update
     *   }
     * })
     */
    upsert<T extends DocenteCarreraUpsertArgs>(args: SelectSubset<T, DocenteCarreraUpsertArgs<ExtArgs>>): Prisma__DocenteCarreraClient<$Result.GetResult<Prisma.$DocenteCarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocenteCarreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraCountArgs} args - Arguments to filter DocenteCarreras to count.
     * @example
     * // Count the number of DocenteCarreras
     * const count = await prisma.docenteCarrera.count({
     *   where: {
     *     // ... the filter for the DocenteCarreras we want to count
     *   }
     * })
    **/
    count<T extends DocenteCarreraCountArgs>(
      args?: Subset<T, DocenteCarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocenteCarrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocenteCarreraAggregateArgs>(args: Subset<T, DocenteCarreraAggregateArgs>): Prisma.PrismaPromise<GetDocenteCarreraAggregateType<T>>

    /**
     * Group by DocenteCarrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCarreraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocenteCarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteCarreraGroupByArgs['orderBy'] }
        : { orderBy?: DocenteCarreraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocenteCarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocenteCarrera model
   */
  readonly fields: DocenteCarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocenteCarrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteCarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocenteCarrera model
   */
  interface DocenteCarreraFieldRefs {
    readonly id: FieldRef<"DocenteCarrera", 'Int'>
    readonly docenteId: FieldRef<"DocenteCarrera", 'Int'>
    readonly carreraId: FieldRef<"DocenteCarrera", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocenteCarrera findUnique
   */
  export type DocenteCarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * Filter, which DocenteCarrera to fetch.
     */
    where: DocenteCarreraWhereUniqueInput
  }

  /**
   * DocenteCarrera findUniqueOrThrow
   */
  export type DocenteCarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * Filter, which DocenteCarrera to fetch.
     */
    where: DocenteCarreraWhereUniqueInput
  }

  /**
   * DocenteCarrera findFirst
   */
  export type DocenteCarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * Filter, which DocenteCarrera to fetch.
     */
    where?: DocenteCarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocenteCarreras to fetch.
     */
    orderBy?: DocenteCarreraOrderByWithRelationInput | DocenteCarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocenteCarreras.
     */
    cursor?: DocenteCarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocenteCarreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocenteCarreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocenteCarreras.
     */
    distinct?: DocenteCarreraScalarFieldEnum | DocenteCarreraScalarFieldEnum[]
  }

  /**
   * DocenteCarrera findFirstOrThrow
   */
  export type DocenteCarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * Filter, which DocenteCarrera to fetch.
     */
    where?: DocenteCarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocenteCarreras to fetch.
     */
    orderBy?: DocenteCarreraOrderByWithRelationInput | DocenteCarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocenteCarreras.
     */
    cursor?: DocenteCarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocenteCarreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocenteCarreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocenteCarreras.
     */
    distinct?: DocenteCarreraScalarFieldEnum | DocenteCarreraScalarFieldEnum[]
  }

  /**
   * DocenteCarrera findMany
   */
  export type DocenteCarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * Filter, which DocenteCarreras to fetch.
     */
    where?: DocenteCarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocenteCarreras to fetch.
     */
    orderBy?: DocenteCarreraOrderByWithRelationInput | DocenteCarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocenteCarreras.
     */
    cursor?: DocenteCarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocenteCarreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocenteCarreras.
     */
    skip?: number
    distinct?: DocenteCarreraScalarFieldEnum | DocenteCarreraScalarFieldEnum[]
  }

  /**
   * DocenteCarrera create
   */
  export type DocenteCarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a DocenteCarrera.
     */
    data: XOR<DocenteCarreraCreateInput, DocenteCarreraUncheckedCreateInput>
  }

  /**
   * DocenteCarrera createMany
   */
  export type DocenteCarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocenteCarreras.
     */
    data: DocenteCarreraCreateManyInput | DocenteCarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocenteCarrera createManyAndReturn
   */
  export type DocenteCarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * The data used to create many DocenteCarreras.
     */
    data: DocenteCarreraCreateManyInput | DocenteCarreraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocenteCarrera update
   */
  export type DocenteCarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a DocenteCarrera.
     */
    data: XOR<DocenteCarreraUpdateInput, DocenteCarreraUncheckedUpdateInput>
    /**
     * Choose, which DocenteCarrera to update.
     */
    where: DocenteCarreraWhereUniqueInput
  }

  /**
   * DocenteCarrera updateMany
   */
  export type DocenteCarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocenteCarreras.
     */
    data: XOR<DocenteCarreraUpdateManyMutationInput, DocenteCarreraUncheckedUpdateManyInput>
    /**
     * Filter which DocenteCarreras to update
     */
    where?: DocenteCarreraWhereInput
    /**
     * Limit how many DocenteCarreras to update.
     */
    limit?: number
  }

  /**
   * DocenteCarrera updateManyAndReturn
   */
  export type DocenteCarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * The data used to update DocenteCarreras.
     */
    data: XOR<DocenteCarreraUpdateManyMutationInput, DocenteCarreraUncheckedUpdateManyInput>
    /**
     * Filter which DocenteCarreras to update
     */
    where?: DocenteCarreraWhereInput
    /**
     * Limit how many DocenteCarreras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocenteCarrera upsert
   */
  export type DocenteCarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the DocenteCarrera to update in case it exists.
     */
    where: DocenteCarreraWhereUniqueInput
    /**
     * In case the DocenteCarrera found by the `where` argument doesn't exist, create a new DocenteCarrera with this data.
     */
    create: XOR<DocenteCarreraCreateInput, DocenteCarreraUncheckedCreateInput>
    /**
     * In case the DocenteCarrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteCarreraUpdateInput, DocenteCarreraUncheckedUpdateInput>
  }

  /**
   * DocenteCarrera delete
   */
  export type DocenteCarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
    /**
     * Filter which DocenteCarrera to delete.
     */
    where: DocenteCarreraWhereUniqueInput
  }

  /**
   * DocenteCarrera deleteMany
   */
  export type DocenteCarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocenteCarreras to delete
     */
    where?: DocenteCarreraWhereInput
    /**
     * Limit how many DocenteCarreras to delete.
     */
    limit?: number
  }

  /**
   * DocenteCarrera without action
   */
  export type DocenteCarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCarrera
     */
    select?: DocenteCarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocenteCarrera
     */
    omit?: DocenteCarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteCarreraInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    roles?: boolean | Usuario$rolesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Usuario$rolesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      roles: Prisma.$UsuarioRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Usuario$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.roles
   */
  export type Usuario$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    cursor?: UsuarioRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      permisos: Prisma.$RolPermisoPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    cursor?: UsuarioRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id?: true
  }

  export type PermisoSumAggregateInputType = {
    id?: true
  }

  export type PermisoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: number
    nombre: string
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      roles: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisoUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permiso$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'Int'>
    readonly nombre: FieldRef<"Permiso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso updateManyAndReturn
   */
  export type PermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso.roles
   */
  export type Permiso$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioRol
   */

  export type AggregateUsuarioRol = {
    _count: UsuarioRolCountAggregateOutputType | null
    _avg: UsuarioRolAvgAggregateOutputType | null
    _sum: UsuarioRolSumAggregateOutputType | null
    _min: UsuarioRolMinAggregateOutputType | null
    _max: UsuarioRolMaxAggregateOutputType | null
  }

  export type UsuarioRolAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolCountAggregateOutputType = {
    id: number
    usuarioId: number
    rolId: number
    _all: number
  }


  export type UsuarioRolAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolSumAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolMinAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolCountAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    _all?: true
  }

  export type UsuarioRolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioRol to aggregate.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioRols
    **/
    _count?: true | UsuarioRolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioRolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioRolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioRolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioRolMaxAggregateInputType
  }

  export type GetUsuarioRolAggregateType<T extends UsuarioRolAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioRol[P]>
      : GetScalarType<T[P], AggregateUsuarioRol[P]>
  }




  export type UsuarioRolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithAggregationInput | UsuarioRolOrderByWithAggregationInput[]
    by: UsuarioRolScalarFieldEnum[] | UsuarioRolScalarFieldEnum
    having?: UsuarioRolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioRolCountAggregateInputType | true
    _avg?: UsuarioRolAvgAggregateInputType
    _sum?: UsuarioRolSumAggregateInputType
    _min?: UsuarioRolMinAggregateInputType
    _max?: UsuarioRolMaxAggregateInputType
  }

  export type UsuarioRolGroupByOutputType = {
    id: number
    usuarioId: number
    rolId: number
    _count: UsuarioRolCountAggregateOutputType | null
    _avg: UsuarioRolAvgAggregateOutputType | null
    _sum: UsuarioRolSumAggregateOutputType | null
    _min: UsuarioRolMinAggregateOutputType | null
    _max: UsuarioRolMaxAggregateOutputType | null
  }

  type GetUsuarioRolGroupByPayload<T extends UsuarioRolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioRolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioRolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioRolGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioRolGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioRolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
  }

  export type UsuarioRolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "rolId", ExtArgs["result"]["usuarioRol"]>
  export type UsuarioRolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioRolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioRolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioRolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioRol"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      rolId: number
    }, ExtArgs["result"]["usuarioRol"]>
    composites: {}
  }

  type UsuarioRolGetPayload<S extends boolean | null | undefined | UsuarioRolDefaultArgs> = $Result.GetResult<Prisma.$UsuarioRolPayload, S>

  type UsuarioRolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioRolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioRolCountAggregateInputType | true
    }

  export interface UsuarioRolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioRol'], meta: { name: 'UsuarioRol' } }
    /**
     * Find zero or one UsuarioRol that matches the filter.
     * @param {UsuarioRolFindUniqueArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioRolFindUniqueArgs>(args: SelectSubset<T, UsuarioRolFindUniqueArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioRol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioRolFindUniqueOrThrowArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioRolFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioRolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioRol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindFirstArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioRolFindFirstArgs>(args?: SelectSubset<T, UsuarioRolFindFirstArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioRol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindFirstOrThrowArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioRolFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioRolFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioRols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioRols
     * const usuarioRols = await prisma.usuarioRol.findMany()
     * 
     * // Get first 10 UsuarioRols
     * const usuarioRols = await prisma.usuarioRol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioRolFindManyArgs>(args?: SelectSubset<T, UsuarioRolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioRol.
     * @param {UsuarioRolCreateArgs} args - Arguments to create a UsuarioRol.
     * @example
     * // Create one UsuarioRol
     * const UsuarioRol = await prisma.usuarioRol.create({
     *   data: {
     *     // ... data to create a UsuarioRol
     *   }
     * })
     * 
     */
    create<T extends UsuarioRolCreateArgs>(args: SelectSubset<T, UsuarioRolCreateArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioRols.
     * @param {UsuarioRolCreateManyArgs} args - Arguments to create many UsuarioRols.
     * @example
     * // Create many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioRolCreateManyArgs>(args?: SelectSubset<T, UsuarioRolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioRols and returns the data saved in the database.
     * @param {UsuarioRolCreateManyAndReturnArgs} args - Arguments to create many UsuarioRols.
     * @example
     * // Create many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioRols and only return the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioRolCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioRolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioRol.
     * @param {UsuarioRolDeleteArgs} args - Arguments to delete one UsuarioRol.
     * @example
     * // Delete one UsuarioRol
     * const UsuarioRol = await prisma.usuarioRol.delete({
     *   where: {
     *     // ... filter to delete one UsuarioRol
     *   }
     * })
     * 
     */
    delete<T extends UsuarioRolDeleteArgs>(args: SelectSubset<T, UsuarioRolDeleteArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioRol.
     * @param {UsuarioRolUpdateArgs} args - Arguments to update one UsuarioRol.
     * @example
     * // Update one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioRolUpdateArgs>(args: SelectSubset<T, UsuarioRolUpdateArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioRols.
     * @param {UsuarioRolDeleteManyArgs} args - Arguments to filter UsuarioRols to delete.
     * @example
     * // Delete a few UsuarioRols
     * const { count } = await prisma.usuarioRol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioRolDeleteManyArgs>(args?: SelectSubset<T, UsuarioRolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioRolUpdateManyArgs>(args: SelectSubset<T, UsuarioRolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioRols and returns the data updated in the database.
     * @param {UsuarioRolUpdateManyAndReturnArgs} args - Arguments to update many UsuarioRols.
     * @example
     * // Update many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioRols and only return the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioRolUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioRolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioRol.
     * @param {UsuarioRolUpsertArgs} args - Arguments to update or create a UsuarioRol.
     * @example
     * // Update or create a UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.upsert({
     *   create: {
     *     // ... data to create a UsuarioRol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioRol we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioRolUpsertArgs>(args: SelectSubset<T, UsuarioRolUpsertArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolCountArgs} args - Arguments to filter UsuarioRols to count.
     * @example
     * // Count the number of UsuarioRols
     * const count = await prisma.usuarioRol.count({
     *   where: {
     *     // ... the filter for the UsuarioRols we want to count
     *   }
     * })
    **/
    count<T extends UsuarioRolCountArgs>(
      args?: Subset<T, UsuarioRolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioRolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioRolAggregateArgs>(args: Subset<T, UsuarioRolAggregateArgs>): Prisma.PrismaPromise<GetUsuarioRolAggregateType<T>>

    /**
     * Group by UsuarioRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioRolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioRolGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioRolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioRolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioRol model
   */
  readonly fields: UsuarioRolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioRol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioRolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioRol model
   */
  interface UsuarioRolFieldRefs {
    readonly id: FieldRef<"UsuarioRol", 'Int'>
    readonly usuarioId: FieldRef<"UsuarioRol", 'Int'>
    readonly rolId: FieldRef<"UsuarioRol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioRol findUnique
   */
  export type UsuarioRolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol findUniqueOrThrow
   */
  export type UsuarioRolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol findFirst
   */
  export type UsuarioRolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioRols.
     */
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol findFirstOrThrow
   */
  export type UsuarioRolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioRols.
     */
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol findMany
   */
  export type UsuarioRolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRols to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol create
   */
  export type UsuarioRolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioRol.
     */
    data: XOR<UsuarioRolCreateInput, UsuarioRolUncheckedCreateInput>
  }

  /**
   * UsuarioRol createMany
   */
  export type UsuarioRolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioRols.
     */
    data: UsuarioRolCreateManyInput | UsuarioRolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioRol createManyAndReturn
   */
  export type UsuarioRolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioRols.
     */
    data: UsuarioRolCreateManyInput | UsuarioRolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioRol update
   */
  export type UsuarioRolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioRol.
     */
    data: XOR<UsuarioRolUpdateInput, UsuarioRolUncheckedUpdateInput>
    /**
     * Choose, which UsuarioRol to update.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol updateMany
   */
  export type UsuarioRolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioRols.
     */
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioRols to update
     */
    where?: UsuarioRolWhereInput
    /**
     * Limit how many UsuarioRols to update.
     */
    limit?: number
  }

  /**
   * UsuarioRol updateManyAndReturn
   */
  export type UsuarioRolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioRols.
     */
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioRols to update
     */
    where?: UsuarioRolWhereInput
    /**
     * Limit how many UsuarioRols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioRol upsert
   */
  export type UsuarioRolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioRol to update in case it exists.
     */
    where: UsuarioRolWhereUniqueInput
    /**
     * In case the UsuarioRol found by the `where` argument doesn't exist, create a new UsuarioRol with this data.
     */
    create: XOR<UsuarioRolCreateInput, UsuarioRolUncheckedCreateInput>
    /**
     * In case the UsuarioRol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioRolUpdateInput, UsuarioRolUncheckedUpdateInput>
  }

  /**
   * UsuarioRol delete
   */
  export type UsuarioRolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter which UsuarioRol to delete.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol deleteMany
   */
  export type UsuarioRolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioRols to delete
     */
    where?: UsuarioRolWhereInput
    /**
     * Limit how many UsuarioRols to delete.
     */
    limit?: number
  }

  /**
   * UsuarioRol without action
   */
  export type UsuarioRolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
  }


  /**
   * Model RolPermiso
   */

  export type AggregateRolPermiso = {
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  export type RolPermisoAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoSumAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMinAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMaxAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoCountAggregateOutputType = {
    id: number
    rolId: number
    permisoId: number
    _all: number
  }


  export type RolPermisoAvgAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoSumAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMinAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMaxAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoCountAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    _all?: true
  }

  export type RolPermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermiso to aggregate.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolPermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolPermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisoMaxAggregateInputType
  }

  export type GetRolPermisoAggregateType<T extends RolPermisoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermiso[P]>
      : GetScalarType<T[P], AggregateRolPermiso[P]>
  }




  export type RolPermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithAggregationInput | RolPermisoOrderByWithAggregationInput[]
    by: RolPermisoScalarFieldEnum[] | RolPermisoScalarFieldEnum
    having?: RolPermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisoCountAggregateInputType | true
    _avg?: RolPermisoAvgAggregateInputType
    _sum?: RolPermisoSumAggregateInputType
    _min?: RolPermisoMinAggregateInputType
    _max?: RolPermisoMaxAggregateInputType
  }

  export type RolPermisoGroupByOutputType = {
    id: number
    rolId: number
    permisoId: number
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  type GetRolPermisoGroupByPayload<T extends RolPermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectScalar = {
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
  }

  export type RolPermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rolId" | "permisoId", ExtArgs["result"]["rolPermiso"]>
  export type RolPermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }

  export type $RolPermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermiso"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      permiso: Prisma.$PermisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rolId: number
      permisoId: number
    }, ExtArgs["result"]["rolPermiso"]>
    composites: {}
  }

  type RolPermisoGetPayload<S extends boolean | null | undefined | RolPermisoDefaultArgs> = $Result.GetResult<Prisma.$RolPermisoPayload, S>

  type RolPermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolPermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolPermisoCountAggregateInputType | true
    }

  export interface RolPermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermiso'], meta: { name: 'RolPermiso' } }
    /**
     * Find zero or one RolPermiso that matches the filter.
     * @param {RolPermisoFindUniqueArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisoFindUniqueArgs>(args: SelectSubset<T, RolPermisoFindUniqueArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolPermiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolPermisoFindUniqueOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisoFindFirstArgs>(args?: SelectSubset<T, RolPermisoFindFirstArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolPermisoFindManyArgs>(args?: SelectSubset<T, RolPermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolPermiso.
     * @param {RolPermisoCreateArgs} args - Arguments to create a RolPermiso.
     * @example
     * // Create one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.create({
     *   data: {
     *     // ... data to create a RolPermiso
     *   }
     * })
     * 
     */
    create<T extends RolPermisoCreateArgs>(args: SelectSubset<T, RolPermisoCreateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolPermisos.
     * @param {RolPermisoCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisoCreateManyArgs>(args?: SelectSubset<T, RolPermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolPermisos and returns the data saved in the database.
     * @param {RolPermisoCreateManyAndReturnArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolPermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, RolPermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolPermiso.
     * @param {RolPermisoDeleteArgs} args - Arguments to delete one RolPermiso.
     * @example
     * // Delete one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.delete({
     *   where: {
     *     // ... filter to delete one RolPermiso
     *   }
     * })
     * 
     */
    delete<T extends RolPermisoDeleteArgs>(args: SelectSubset<T, RolPermisoDeleteArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolPermiso.
     * @param {RolPermisoUpdateArgs} args - Arguments to update one RolPermiso.
     * @example
     * // Update one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisoUpdateArgs>(args: SelectSubset<T, RolPermisoUpdateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisoDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisoDeleteManyArgs>(args?: SelectSubset<T, RolPermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisoUpdateManyArgs>(args: SelectSubset<T, RolPermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos and returns the data updated in the database.
     * @param {RolPermisoUpdateManyAndReturnArgs} args - Arguments to update many RolPermisos.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolPermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, RolPermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolPermiso.
     * @param {RolPermisoUpsertArgs} args - Arguments to update or create a RolPermiso.
     * @example
     * // Update or create a RolPermiso
     * const rolPermiso = await prisma.rolPermiso.upsert({
     *   create: {
     *     // ... data to create a RolPermiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermiso we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisoUpsertArgs>(args: SelectSubset<T, RolPermisoUpsertArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermiso.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisoCountArgs>(
      args?: Subset<T, RolPermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolPermisoAggregateArgs>(args: Subset<T, RolPermisoAggregateArgs>): Prisma.PrismaPromise<GetRolPermisoAggregateType<T>>

    /**
     * Group by RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolPermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisoGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolPermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermiso model
   */
  readonly fields: RolPermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolPermiso model
   */
  interface RolPermisoFieldRefs {
    readonly id: FieldRef<"RolPermiso", 'Int'>
    readonly rolId: FieldRef<"RolPermiso", 'Int'>
    readonly permisoId: FieldRef<"RolPermiso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolPermiso findUnique
   */
  export type RolPermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findUniqueOrThrow
   */
  export type RolPermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findFirst
   */
  export type RolPermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findFirstOrThrow
   */
  export type RolPermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findMany
   */
  export type RolPermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso create
   */
  export type RolPermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermiso.
     */
    data: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
  }

  /**
   * RolPermiso createMany
   */
  export type RolPermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermiso createManyAndReturn
   */
  export type RolPermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso update
   */
  export type RolPermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermiso.
     */
    data: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
    /**
     * Choose, which RolPermiso to update.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso updateMany
   */
  export type RolPermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
  }

  /**
   * RolPermiso updateManyAndReturn
   */
  export type RolPermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso upsert
   */
  export type RolPermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermiso to update in case it exists.
     */
    where: RolPermisoWhereUniqueInput
    /**
     * In case the RolPermiso found by the `where` argument doesn't exist, create a new RolPermiso with this data.
     */
    create: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
    /**
     * In case the RolPermiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
  }

  /**
   * RolPermiso delete
   */
  export type RolPermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter which RolPermiso to delete.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso deleteMany
   */
  export type RolPermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to delete.
     */
    limit?: number
  }

  /**
   * RolPermiso without action
   */
  export type RolPermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarreraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    carreraId: 'carreraId'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const DocenteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum]


  export const RegistroScalarFieldEnum: {
    id: 'id',
    carreraId: 'carreraId',
    materiaId: 'materiaId'
  };

  export type RegistroScalarFieldEnum = (typeof RegistroScalarFieldEnum)[keyof typeof RegistroScalarFieldEnum]


  export const InscripcionScalarFieldEnum: {
    id: 'id',
    estudianteId: 'estudianteId',
    materiaId: 'materiaId'
  };

  export type InscripcionScalarFieldEnum = (typeof InscripcionScalarFieldEnum)[keyof typeof InscripcionScalarFieldEnum]


  export const DictanScalarFieldEnum: {
    id: 'id',
    docenteId: 'docenteId',
    materiaId: 'materiaId'
  };

  export type DictanScalarFieldEnum = (typeof DictanScalarFieldEnum)[keyof typeof DictanScalarFieldEnum]


  export const DocenteCarreraScalarFieldEnum: {
    id: 'id',
    docenteId: 'docenteId',
    carreraId: 'carreraId'
  };

  export type DocenteCarreraScalarFieldEnum = (typeof DocenteCarreraScalarFieldEnum)[keyof typeof DocenteCarreraScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const UsuarioRolScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    rolId: 'rolId'
  };

  export type UsuarioRolScalarFieldEnum = (typeof UsuarioRolScalarFieldEnum)[keyof typeof UsuarioRolScalarFieldEnum]


  export const RolPermisoScalarFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    permisoId: 'permisoId'
  };

  export type RolPermisoScalarFieldEnum = (typeof RolPermisoScalarFieldEnum)[keyof typeof RolPermisoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    estudiantes?: EstudianteListRelationFilter
    docentesCarrera?: DocenteCarreraListRelationFilter
    materias?: MateriaListRelationFilter
    registros?: RegistroListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estudiantes?: EstudianteOrderByRelationAggregateInput
    docentesCarrera?: DocenteCarreraOrderByRelationAggregateInput
    materias?: MateriaOrderByRelationAggregateInput
    registros?: RegistroOrderByRelationAggregateInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    nombre?: StringFilter<"Carrera"> | string
    estudiantes?: EstudianteListRelationFilter
    docentesCarrera?: DocenteCarreraListRelationFilter
    materias?: MateriaListRelationFilter
    registros?: RegistroListRelationFilter
  }, "id">

  export type CarreraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    registros?: RegistroListRelationFilter
    inscripciones?: InscripcionListRelationFilter
    dictan?: DictanListRelationFilter
    carreras?: CarreraListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    registros?: RegistroOrderByRelationAggregateInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
    dictan?: DictanOrderByRelationAggregateInput
    carreras?: CarreraOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre?: StringFilter<"Materia"> | string
    registros?: RegistroListRelationFilter
    inscripciones?: InscripcionListRelationFilter
    dictan?: DictanListRelationFilter
    carreras?: CarreraListRelationFilter
  }, "id">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materia"> | number
    nombre?: StringWithAggregatesFilter<"Materia"> | string
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    carreraId?: IntFilter<"Estudiante"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    nombre?: StringFilter<"Estudiante"> | string
    carreraId?: IntFilter<"Estudiante"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }, "id">

  export type EstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudiante"> | number
    nombre?: StringWithAggregatesFilter<"Estudiante"> | string
    carreraId?: IntWithAggregatesFilter<"Estudiante"> | number
  }

  export type DocenteWhereInput = {
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    id?: IntFilter<"Docente"> | number
    nombre?: StringFilter<"Docente"> | string
    dictan?: DictanListRelationFilter
    docentesCarrera?: DocenteCarreraListRelationFilter
  }

  export type DocenteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    dictan?: DictanOrderByRelationAggregateInput
    docentesCarrera?: DocenteCarreraOrderByRelationAggregateInput
  }

  export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    nombre?: StringFilter<"Docente"> | string
    dictan?: DictanListRelationFilter
    docentesCarrera?: DocenteCarreraListRelationFilter
  }, "id">

  export type DocenteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: DocenteCountOrderByAggregateInput
    _avg?: DocenteAvgOrderByAggregateInput
    _max?: DocenteMaxOrderByAggregateInput
    _min?: DocenteMinOrderByAggregateInput
    _sum?: DocenteSumOrderByAggregateInput
  }

  export type DocenteScalarWhereWithAggregatesInput = {
    AND?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    OR?: DocenteScalarWhereWithAggregatesInput[]
    NOT?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Docente"> | number
    nombre?: StringWithAggregatesFilter<"Docente"> | string
  }

  export type RegistroWhereInput = {
    AND?: RegistroWhereInput | RegistroWhereInput[]
    OR?: RegistroWhereInput[]
    NOT?: RegistroWhereInput | RegistroWhereInput[]
    id?: IntFilter<"Registro"> | number
    carreraId?: IntFilter<"Registro"> | number
    materiaId?: IntFilter<"Registro"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type RegistroOrderByWithRelationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type RegistroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistroWhereInput | RegistroWhereInput[]
    OR?: RegistroWhereInput[]
    NOT?: RegistroWhereInput | RegistroWhereInput[]
    carreraId?: IntFilter<"Registro"> | number
    materiaId?: IntFilter<"Registro"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id">

  export type RegistroOrderByWithAggregationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
    _count?: RegistroCountOrderByAggregateInput
    _avg?: RegistroAvgOrderByAggregateInput
    _max?: RegistroMaxOrderByAggregateInput
    _min?: RegistroMinOrderByAggregateInput
    _sum?: RegistroSumOrderByAggregateInput
  }

  export type RegistroScalarWhereWithAggregatesInput = {
    AND?: RegistroScalarWhereWithAggregatesInput | RegistroScalarWhereWithAggregatesInput[]
    OR?: RegistroScalarWhereWithAggregatesInput[]
    NOT?: RegistroScalarWhereWithAggregatesInput | RegistroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registro"> | number
    carreraId?: IntWithAggregatesFilter<"Registro"> | number
    materiaId?: IntWithAggregatesFilter<"Registro"> | number
  }

  export type InscripcionWhereInput = {
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    estudianteId?: IntFilter<"Inscripcion"> | number
    materiaId?: IntFilter<"Inscripcion"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type InscripcionOrderByWithRelationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type InscripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    estudianteId?: IntFilter<"Inscripcion"> | number
    materiaId?: IntFilter<"Inscripcion"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id">

  export type InscripcionOrderByWithAggregationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
    _count?: InscripcionCountOrderByAggregateInput
    _avg?: InscripcionAvgOrderByAggregateInput
    _max?: InscripcionMaxOrderByAggregateInput
    _min?: InscripcionMinOrderByAggregateInput
    _sum?: InscripcionSumOrderByAggregateInput
  }

  export type InscripcionScalarWhereWithAggregatesInput = {
    AND?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    OR?: InscripcionScalarWhereWithAggregatesInput[]
    NOT?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inscripcion"> | number
    estudianteId?: IntWithAggregatesFilter<"Inscripcion"> | number
    materiaId?: IntWithAggregatesFilter<"Inscripcion"> | number
  }

  export type DictanWhereInput = {
    AND?: DictanWhereInput | DictanWhereInput[]
    OR?: DictanWhereInput[]
    NOT?: DictanWhereInput | DictanWhereInput[]
    id?: IntFilter<"Dictan"> | number
    docenteId?: IntFilter<"Dictan"> | number
    materiaId?: IntFilter<"Dictan"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type DictanOrderByWithRelationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
    docente?: DocenteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type DictanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DictanWhereInput | DictanWhereInput[]
    OR?: DictanWhereInput[]
    NOT?: DictanWhereInput | DictanWhereInput[]
    docenteId?: IntFilter<"Dictan"> | number
    materiaId?: IntFilter<"Dictan"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id">

  export type DictanOrderByWithAggregationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
    _count?: DictanCountOrderByAggregateInput
    _avg?: DictanAvgOrderByAggregateInput
    _max?: DictanMaxOrderByAggregateInput
    _min?: DictanMinOrderByAggregateInput
    _sum?: DictanSumOrderByAggregateInput
  }

  export type DictanScalarWhereWithAggregatesInput = {
    AND?: DictanScalarWhereWithAggregatesInput | DictanScalarWhereWithAggregatesInput[]
    OR?: DictanScalarWhereWithAggregatesInput[]
    NOT?: DictanScalarWhereWithAggregatesInput | DictanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dictan"> | number
    docenteId?: IntWithAggregatesFilter<"Dictan"> | number
    materiaId?: IntWithAggregatesFilter<"Dictan"> | number
  }

  export type DocenteCarreraWhereInput = {
    AND?: DocenteCarreraWhereInput | DocenteCarreraWhereInput[]
    OR?: DocenteCarreraWhereInput[]
    NOT?: DocenteCarreraWhereInput | DocenteCarreraWhereInput[]
    id?: IntFilter<"DocenteCarrera"> | number
    docenteId?: IntFilter<"DocenteCarrera"> | number
    carreraId?: IntFilter<"DocenteCarrera"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
  }

  export type DocenteCarreraOrderByWithRelationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
    docente?: DocenteOrderByWithRelationInput
    carrera?: CarreraOrderByWithRelationInput
  }

  export type DocenteCarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocenteCarreraWhereInput | DocenteCarreraWhereInput[]
    OR?: DocenteCarreraWhereInput[]
    NOT?: DocenteCarreraWhereInput | DocenteCarreraWhereInput[]
    docenteId?: IntFilter<"DocenteCarrera"> | number
    carreraId?: IntFilter<"DocenteCarrera"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
  }, "id">

  export type DocenteCarreraOrderByWithAggregationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
    _count?: DocenteCarreraCountOrderByAggregateInput
    _avg?: DocenteCarreraAvgOrderByAggregateInput
    _max?: DocenteCarreraMaxOrderByAggregateInput
    _min?: DocenteCarreraMinOrderByAggregateInput
    _sum?: DocenteCarreraSumOrderByAggregateInput
  }

  export type DocenteCarreraScalarWhereWithAggregatesInput = {
    AND?: DocenteCarreraScalarWhereWithAggregatesInput | DocenteCarreraScalarWhereWithAggregatesInput[]
    OR?: DocenteCarreraScalarWhereWithAggregatesInput[]
    NOT?: DocenteCarreraScalarWhereWithAggregatesInput | DocenteCarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocenteCarrera"> | number
    docenteId?: IntWithAggregatesFilter<"DocenteCarrera"> | number
    carreraId?: IntWithAggregatesFilter<"DocenteCarrera"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    username?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    roles?: UsuarioRolListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roles?: UsuarioRolOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    roles?: UsuarioRolListRelationFilter
  }, "id" | "username">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    username?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    permisos?: RolPermisoListRelationFilter
    usuarios?: UsuarioRolListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    permisos?: RolPermisoOrderByRelationAggregateInput
    usuarios?: UsuarioRolOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    permisos?: RolPermisoListRelationFilter
    usuarios?: UsuarioRolListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: IntFilter<"Permiso"> | number
    nombre?: StringFilter<"Permiso"> | string
    roles?: RolPermisoListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    roles?: RolPermisoOrderByRelationAggregateInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    roles?: RolPermisoListRelationFilter
  }, "id" | "nombre">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permiso"> | number
    nombre?: StringWithAggregatesFilter<"Permiso"> | string
  }

  export type UsuarioRolWhereInput = {
    AND?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    OR?: UsuarioRolWhereInput[]
    NOT?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    id?: IntFilter<"UsuarioRol"> | number
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }

  export type UsuarioRolOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
  }

  export type UsuarioRolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    OR?: UsuarioRolWhereInput[]
    NOT?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }, "id">

  export type UsuarioRolOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    _count?: UsuarioRolCountOrderByAggregateInput
    _avg?: UsuarioRolAvgOrderByAggregateInput
    _max?: UsuarioRolMaxOrderByAggregateInput
    _min?: UsuarioRolMinOrderByAggregateInput
    _sum?: UsuarioRolSumOrderByAggregateInput
  }

  export type UsuarioRolScalarWhereWithAggregatesInput = {
    AND?: UsuarioRolScalarWhereWithAggregatesInput | UsuarioRolScalarWhereWithAggregatesInput[]
    OR?: UsuarioRolScalarWhereWithAggregatesInput[]
    NOT?: UsuarioRolScalarWhereWithAggregatesInput | UsuarioRolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioRol"> | number
    usuarioId?: IntWithAggregatesFilter<"UsuarioRol"> | number
    rolId?: IntWithAggregatesFilter<"UsuarioRol"> | number
  }

  export type RolPermisoWhereInput = {
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }

  export type RolPermisoOrderByWithRelationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    rol?: RolOrderByWithRelationInput
    permiso?: PermisoOrderByWithRelationInput
  }

  export type RolPermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }, "id">

  export type RolPermisoOrderByWithAggregationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    _count?: RolPermisoCountOrderByAggregateInput
    _avg?: RolPermisoAvgOrderByAggregateInput
    _max?: RolPermisoMaxOrderByAggregateInput
    _min?: RolPermisoMinOrderByAggregateInput
    _sum?: RolPermisoSumOrderByAggregateInput
  }

  export type RolPermisoScalarWhereWithAggregatesInput = {
    AND?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    OR?: RolPermisoScalarWhereWithAggregatesInput[]
    NOT?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolPermiso"> | number
    rolId?: IntWithAggregatesFilter<"RolPermiso"> | number
    permisoId?: IntWithAggregatesFilter<"RolPermiso"> | number
  }

  export type CarreraCreateInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    docentesCarrera?: DocenteCarreraCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarrerasInput
    registros?: RegistroCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    docentesCarrera?: DocenteCarreraUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarrerasInput
    registros?: RegistroUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    docentesCarrera?: DocenteCarreraUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarrerasNestedInput
    registros?: RegistroUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    docentesCarrera?: DocenteCarreraUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarrerasNestedInput
    registros?: RegistroUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateInput = {
    nombre: string
    registros?: RegistroCreateNestedManyWithoutMateriaInput
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    dictan?: DictanCreateNestedManyWithoutMateriaInput
    carreras?: CarreraCreateNestedManyWithoutMateriasInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: number
    nombre: string
    registros?: RegistroUncheckedCreateNestedManyWithoutMateriaInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictanUncheckedCreateNestedManyWithoutMateriaInput
    carreras?: CarreraUncheckedCreateNestedManyWithoutMateriasInput
  }

  export type MateriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUpdateManyWithoutMateriaNestedInput
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUpdateManyWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUncheckedUpdateManyWithoutMateriaNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUncheckedUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUncheckedUpdateManyWithoutMateriasNestedInput
  }

  export type MateriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type MateriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteCreateInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id?: number
    nombre: string
    carreraId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id?: number
    nombre: string
    carreraId: number
  }

  export type EstudianteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCreateInput = {
    nombre: string
    dictan?: DictanCreateNestedManyWithoutDocenteInput
    docentesCarrera?: DocenteCarreraCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateInput = {
    id?: number
    nombre: string
    dictan?: DictanUncheckedCreateNestedManyWithoutDocenteInput
    docentesCarrera?: DocenteCarreraUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictanUpdateManyWithoutDocenteNestedInput
    docentesCarrera?: DocenteCarreraUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictanUncheckedUpdateManyWithoutDocenteNestedInput
    docentesCarrera?: DocenteCarreraUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteCreateManyInput = {
    id?: number
    nombre: string
  }

  export type DocenteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroCreateInput = {
    carrera: CarreraCreateNestedOneWithoutRegistrosInput
    materia: MateriaCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateInput = {
    id?: number
    carreraId: number
    materiaId: number
  }

  export type RegistroUpdateInput = {
    carrera?: CarreraUpdateOneRequiredWithoutRegistrosNestedInput
    materia?: MateriaUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroCreateManyInput = {
    id?: number
    carreraId: number
    materiaId: number
  }

  export type RegistroUpdateManyMutationInput = {

  }

  export type RegistroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateInput = {
    estudiante: EstudianteCreateNestedOneWithoutInscripcionesInput
    materia: MateriaCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type InscripcionUpdateInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput
    materia?: MateriaUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateManyInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type InscripcionUpdateManyMutationInput = {

  }

  export type InscripcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictanCreateInput = {
    docente: DocenteCreateNestedOneWithoutDictanInput
    materia: MateriaCreateNestedOneWithoutDictanInput
  }

  export type DictanUncheckedCreateInput = {
    id?: number
    docenteId: number
    materiaId: number
  }

  export type DictanUpdateInput = {
    docente?: DocenteUpdateOneRequiredWithoutDictanNestedInput
    materia?: MateriaUpdateOneRequiredWithoutDictanNestedInput
  }

  export type DictanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictanCreateManyInput = {
    id?: number
    docenteId: number
    materiaId: number
  }

  export type DictanUpdateManyMutationInput = {

  }

  export type DictanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCarreraCreateInput = {
    docente: DocenteCreateNestedOneWithoutDocentesCarreraInput
    carrera: CarreraCreateNestedOneWithoutDocentesCarreraInput
  }

  export type DocenteCarreraUncheckedCreateInput = {
    id?: number
    docenteId: number
    carreraId: number
  }

  export type DocenteCarreraUpdateInput = {
    docente?: DocenteUpdateOneRequiredWithoutDocentesCarreraNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutDocentesCarreraNestedInput
  }

  export type DocenteCarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCarreraCreateManyInput = {
    id?: number
    docenteId: number
    carreraId: number
  }

  export type DocenteCarreraUpdateManyMutationInput = {

  }

  export type DocenteCarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    username: string
    password: string
    roles?: UsuarioRolCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    roles?: UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: UsuarioRolUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UsuarioUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RolCreateInput = {
    nombre: string
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
    usuarios?: UsuarioRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: string
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
    usuarios?: UsuarioRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
    usuarios?: UsuarioRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
    usuarios?: UsuarioRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoCreateInput = {
    nombre: string
    roles?: RolPermisoCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: number
    nombre: string
    roles?: RolPermisoUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    roles?: RolPermisoUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    roles?: RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PermisoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioRolCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutRolesInput
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioRolUncheckedCreateInput = {
    id?: number
    usuarioId: number
    rolId: number
  }

  export type UsuarioRolUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutRolesNestedInput
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioRolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolCreateManyInput = {
    id?: number
    usuarioId: number
    rolId: number
  }

  export type UsuarioRolUpdateManyMutationInput = {

  }

  export type UsuarioRolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateManyMutationInput = {

  }

  export type RolPermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EstudianteListRelationFilter = {
    every?: EstudianteWhereInput
    some?: EstudianteWhereInput
    none?: EstudianteWhereInput
  }

  export type DocenteCarreraListRelationFilter = {
    every?: DocenteCarreraWhereInput
    some?: DocenteCarreraWhereInput
    none?: DocenteCarreraWhereInput
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type RegistroListRelationFilter = {
    every?: RegistroWhereInput
    some?: RegistroWhereInput
    none?: RegistroWhereInput
  }

  export type EstudianteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocenteCarreraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type InscripcionListRelationFilter = {
    every?: InscripcionWhereInput
    some?: InscripcionWhereInput
    none?: InscripcionWhereInput
  }

  export type DictanListRelationFilter = {
    every?: DictanWhereInput
    some?: DictanWhereInput
    none?: DictanWhereInput
  }

  export type CarreraListRelationFilter = {
    every?: CarreraWhereInput
    some?: CarreraWhereInput
    none?: CarreraWhereInput
  }

  export type InscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type EstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
  }

  export type DocenteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DocenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DocenteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DocenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type RegistroCountOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type RegistroAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type RegistroMaxOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type RegistroMinOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type RegistroSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type EstudianteScalarRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type InscripcionCountOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionMaxOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionMinOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DocenteScalarRelationFilter = {
    is?: DocenteWhereInput
    isNot?: DocenteWhereInput
  }

  export type DictanCountOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictanAvgOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictanMaxOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictanMinOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictanSumOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DocenteCarreraCountOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
  }

  export type DocenteCarreraAvgOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
  }

  export type DocenteCarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
  }

  export type DocenteCarreraMinOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
  }

  export type DocenteCarreraSumOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    carreraId?: SortOrder
  }

  export type UsuarioRolListRelationFilter = {
    every?: UsuarioRolWhereInput
    some?: UsuarioRolWhereInput
    none?: UsuarioRolWhereInput
  }

  export type UsuarioRolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolPermisoListRelationFilter = {
    every?: RolPermisoWhereInput
    some?: RolPermisoWhereInput
    none?: RolPermisoWhereInput
  }

  export type RolPermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type UsuarioRolCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type PermisoScalarRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type RolPermisoCountOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMinOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type EstudianteCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type DocenteCarreraCreateNestedManyWithoutCarreraInput = {
    create?: XOR<DocenteCarreraCreateWithoutCarreraInput, DocenteCarreraUncheckedCreateWithoutCarreraInput> | DocenteCarreraCreateWithoutCarreraInput[] | DocenteCarreraUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutCarreraInput | DocenteCarreraCreateOrConnectWithoutCarreraInput[]
    createMany?: DocenteCarreraCreateManyCarreraInputEnvelope
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
  }

  export type MateriaCreateNestedManyWithoutCarrerasInput = {
    create?: XOR<MateriaCreateWithoutCarrerasInput, MateriaUncheckedCreateWithoutCarrerasInput> | MateriaCreateWithoutCarrerasInput[] | MateriaUncheckedCreateWithoutCarrerasInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarrerasInput | MateriaCreateOrConnectWithoutCarrerasInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type RegistroCreateNestedManyWithoutCarreraInput = {
    create?: XOR<RegistroCreateWithoutCarreraInput, RegistroUncheckedCreateWithoutCarreraInput> | RegistroCreateWithoutCarreraInput[] | RegistroUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCarreraInput | RegistroCreateOrConnectWithoutCarreraInput[]
    createMany?: RegistroCreateManyCarreraInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type EstudianteUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type DocenteCarreraUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<DocenteCarreraCreateWithoutCarreraInput, DocenteCarreraUncheckedCreateWithoutCarreraInput> | DocenteCarreraCreateWithoutCarreraInput[] | DocenteCarreraUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutCarreraInput | DocenteCarreraCreateOrConnectWithoutCarreraInput[]
    createMany?: DocenteCarreraCreateManyCarreraInputEnvelope
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCarrerasInput = {
    create?: XOR<MateriaCreateWithoutCarrerasInput, MateriaUncheckedCreateWithoutCarrerasInput> | MateriaCreateWithoutCarrerasInput[] | MateriaUncheckedCreateWithoutCarrerasInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarrerasInput | MateriaCreateOrConnectWithoutCarrerasInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type RegistroUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<RegistroCreateWithoutCarreraInput, RegistroUncheckedCreateWithoutCarreraInput> | RegistroCreateWithoutCarreraInput[] | RegistroUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCarreraInput | RegistroCreateOrConnectWithoutCarreraInput[]
    createMany?: RegistroCreateManyCarreraInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstudianteUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type DocenteCarreraUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<DocenteCarreraCreateWithoutCarreraInput, DocenteCarreraUncheckedCreateWithoutCarreraInput> | DocenteCarreraCreateWithoutCarreraInput[] | DocenteCarreraUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutCarreraInput | DocenteCarreraCreateOrConnectWithoutCarreraInput[]
    upsert?: DocenteCarreraUpsertWithWhereUniqueWithoutCarreraInput | DocenteCarreraUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: DocenteCarreraCreateManyCarreraInputEnvelope
    set?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    disconnect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    delete?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    update?: DocenteCarreraUpdateWithWhereUniqueWithoutCarreraInput | DocenteCarreraUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: DocenteCarreraUpdateManyWithWhereWithoutCarreraInput | DocenteCarreraUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: DocenteCarreraScalarWhereInput | DocenteCarreraScalarWhereInput[]
  }

  export type MateriaUpdateManyWithoutCarrerasNestedInput = {
    create?: XOR<MateriaCreateWithoutCarrerasInput, MateriaUncheckedCreateWithoutCarrerasInput> | MateriaCreateWithoutCarrerasInput[] | MateriaUncheckedCreateWithoutCarrerasInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarrerasInput | MateriaCreateOrConnectWithoutCarrerasInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarrerasInput | MateriaUpsertWithWhereUniqueWithoutCarrerasInput[]
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarrerasInput | MateriaUpdateWithWhereUniqueWithoutCarrerasInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarrerasInput | MateriaUpdateManyWithWhereWithoutCarrerasInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type RegistroUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<RegistroCreateWithoutCarreraInput, RegistroUncheckedCreateWithoutCarreraInput> | RegistroCreateWithoutCarreraInput[] | RegistroUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCarreraInput | RegistroCreateOrConnectWithoutCarreraInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutCarreraInput | RegistroUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: RegistroCreateManyCarreraInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutCarreraInput | RegistroUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutCarreraInput | RegistroUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type DocenteCarreraUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<DocenteCarreraCreateWithoutCarreraInput, DocenteCarreraUncheckedCreateWithoutCarreraInput> | DocenteCarreraCreateWithoutCarreraInput[] | DocenteCarreraUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutCarreraInput | DocenteCarreraCreateOrConnectWithoutCarreraInput[]
    upsert?: DocenteCarreraUpsertWithWhereUniqueWithoutCarreraInput | DocenteCarreraUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: DocenteCarreraCreateManyCarreraInputEnvelope
    set?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    disconnect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    delete?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    update?: DocenteCarreraUpdateWithWhereUniqueWithoutCarreraInput | DocenteCarreraUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: DocenteCarreraUpdateManyWithWhereWithoutCarreraInput | DocenteCarreraUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: DocenteCarreraScalarWhereInput | DocenteCarreraScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCarrerasNestedInput = {
    create?: XOR<MateriaCreateWithoutCarrerasInput, MateriaUncheckedCreateWithoutCarrerasInput> | MateriaCreateWithoutCarrerasInput[] | MateriaUncheckedCreateWithoutCarrerasInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarrerasInput | MateriaCreateOrConnectWithoutCarrerasInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarrerasInput | MateriaUpsertWithWhereUniqueWithoutCarrerasInput[]
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarrerasInput | MateriaUpdateWithWhereUniqueWithoutCarrerasInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarrerasInput | MateriaUpdateManyWithWhereWithoutCarrerasInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type RegistroUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<RegistroCreateWithoutCarreraInput, RegistroUncheckedCreateWithoutCarreraInput> | RegistroCreateWithoutCarreraInput[] | RegistroUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutCarreraInput | RegistroCreateOrConnectWithoutCarreraInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutCarreraInput | RegistroUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: RegistroCreateManyCarreraInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutCarreraInput | RegistroUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutCarreraInput | RegistroUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type RegistroCreateNestedManyWithoutMateriaInput = {
    create?: XOR<RegistroCreateWithoutMateriaInput, RegistroUncheckedCreateWithoutMateriaInput> | RegistroCreateWithoutMateriaInput[] | RegistroUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutMateriaInput | RegistroCreateOrConnectWithoutMateriaInput[]
    createMany?: RegistroCreateManyMateriaInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type InscripcionCreateNestedManyWithoutMateriaInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type DictanCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DictanCreateWithoutMateriaInput, DictanUncheckedCreateWithoutMateriaInput> | DictanCreateWithoutMateriaInput[] | DictanUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutMateriaInput | DictanCreateOrConnectWithoutMateriaInput[]
    createMany?: DictanCreateManyMateriaInputEnvelope
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
  }

  export type CarreraCreateNestedManyWithoutMateriasInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput> | CarreraCreateWithoutMateriasInput[] | CarreraUncheckedCreateWithoutMateriasInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput | CarreraCreateOrConnectWithoutMateriasInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type RegistroUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<RegistroCreateWithoutMateriaInput, RegistroUncheckedCreateWithoutMateriaInput> | RegistroCreateWithoutMateriaInput[] | RegistroUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutMateriaInput | RegistroCreateOrConnectWithoutMateriaInput[]
    createMany?: RegistroCreateManyMateriaInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type DictanUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DictanCreateWithoutMateriaInput, DictanUncheckedCreateWithoutMateriaInput> | DictanCreateWithoutMateriaInput[] | DictanUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutMateriaInput | DictanCreateOrConnectWithoutMateriaInput[]
    createMany?: DictanCreateManyMateriaInputEnvelope
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
  }

  export type CarreraUncheckedCreateNestedManyWithoutMateriasInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput> | CarreraCreateWithoutMateriasInput[] | CarreraUncheckedCreateWithoutMateriasInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput | CarreraCreateOrConnectWithoutMateriasInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type RegistroUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<RegistroCreateWithoutMateriaInput, RegistroUncheckedCreateWithoutMateriaInput> | RegistroCreateWithoutMateriaInput[] | RegistroUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutMateriaInput | RegistroCreateOrConnectWithoutMateriaInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutMateriaInput | RegistroUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: RegistroCreateManyMateriaInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutMateriaInput | RegistroUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutMateriaInput | RegistroUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type InscripcionUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutMateriaInput | InscripcionUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutMateriaInput | InscripcionUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutMateriaInput | InscripcionUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type DictanUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DictanCreateWithoutMateriaInput, DictanUncheckedCreateWithoutMateriaInput> | DictanCreateWithoutMateriaInput[] | DictanUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutMateriaInput | DictanCreateOrConnectWithoutMateriaInput[]
    upsert?: DictanUpsertWithWhereUniqueWithoutMateriaInput | DictanUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DictanCreateManyMateriaInputEnvelope
    set?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    disconnect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    delete?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    update?: DictanUpdateWithWhereUniqueWithoutMateriaInput | DictanUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DictanUpdateManyWithWhereWithoutMateriaInput | DictanUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DictanScalarWhereInput | DictanScalarWhereInput[]
  }

  export type CarreraUpdateManyWithoutMateriasNestedInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput> | CarreraCreateWithoutMateriasInput[] | CarreraUncheckedCreateWithoutMateriasInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput | CarreraCreateOrConnectWithoutMateriasInput[]
    upsert?: CarreraUpsertWithWhereUniqueWithoutMateriasInput | CarreraUpsertWithWhereUniqueWithoutMateriasInput[]
    set?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    disconnect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    delete?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    update?: CarreraUpdateWithWhereUniqueWithoutMateriasInput | CarreraUpdateWithWhereUniqueWithoutMateriasInput[]
    updateMany?: CarreraUpdateManyWithWhereWithoutMateriasInput | CarreraUpdateManyWithWhereWithoutMateriasInput[]
    deleteMany?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
  }

  export type RegistroUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<RegistroCreateWithoutMateriaInput, RegistroUncheckedCreateWithoutMateriaInput> | RegistroCreateWithoutMateriaInput[] | RegistroUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutMateriaInput | RegistroCreateOrConnectWithoutMateriaInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutMateriaInput | RegistroUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: RegistroCreateManyMateriaInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutMateriaInput | RegistroUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutMateriaInput | RegistroUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutMateriaInput | InscripcionUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutMateriaInput | InscripcionUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutMateriaInput | InscripcionUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type DictanUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DictanCreateWithoutMateriaInput, DictanUncheckedCreateWithoutMateriaInput> | DictanCreateWithoutMateriaInput[] | DictanUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutMateriaInput | DictanCreateOrConnectWithoutMateriaInput[]
    upsert?: DictanUpsertWithWhereUniqueWithoutMateriaInput | DictanUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DictanCreateManyMateriaInputEnvelope
    set?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    disconnect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    delete?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    update?: DictanUpdateWithWhereUniqueWithoutMateriaInput | DictanUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DictanUpdateManyWithWhereWithoutMateriaInput | DictanUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DictanScalarWhereInput | DictanScalarWhereInput[]
  }

  export type CarreraUncheckedUpdateManyWithoutMateriasNestedInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput> | CarreraCreateWithoutMateriasInput[] | CarreraUncheckedCreateWithoutMateriasInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput | CarreraCreateOrConnectWithoutMateriasInput[]
    upsert?: CarreraUpsertWithWhereUniqueWithoutMateriasInput | CarreraUpsertWithWhereUniqueWithoutMateriasInput[]
    set?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    disconnect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    delete?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    update?: CarreraUpdateWithWhereUniqueWithoutMateriasInput | CarreraUpdateWithWhereUniqueWithoutMateriasInput[]
    updateMany?: CarreraUpdateManyWithWhereWithoutMateriasInput | CarreraUpdateManyWithWhereWithoutMateriasInput[]
    deleteMany?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
  }

  export type InscripcionCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type CarreraUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    upsert?: CarreraUpsertWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutEstudiantesInput, CarreraUpdateWithoutEstudiantesInput>, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type InscripcionUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type DictanCreateNestedManyWithoutDocenteInput = {
    create?: XOR<DictanCreateWithoutDocenteInput, DictanUncheckedCreateWithoutDocenteInput> | DictanCreateWithoutDocenteInput[] | DictanUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutDocenteInput | DictanCreateOrConnectWithoutDocenteInput[]
    createMany?: DictanCreateManyDocenteInputEnvelope
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
  }

  export type DocenteCarreraCreateNestedManyWithoutDocenteInput = {
    create?: XOR<DocenteCarreraCreateWithoutDocenteInput, DocenteCarreraUncheckedCreateWithoutDocenteInput> | DocenteCarreraCreateWithoutDocenteInput[] | DocenteCarreraUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutDocenteInput | DocenteCarreraCreateOrConnectWithoutDocenteInput[]
    createMany?: DocenteCarreraCreateManyDocenteInputEnvelope
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
  }

  export type DictanUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<DictanCreateWithoutDocenteInput, DictanUncheckedCreateWithoutDocenteInput> | DictanCreateWithoutDocenteInput[] | DictanUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutDocenteInput | DictanCreateOrConnectWithoutDocenteInput[]
    createMany?: DictanCreateManyDocenteInputEnvelope
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
  }

  export type DocenteCarreraUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<DocenteCarreraCreateWithoutDocenteInput, DocenteCarreraUncheckedCreateWithoutDocenteInput> | DocenteCarreraCreateWithoutDocenteInput[] | DocenteCarreraUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutDocenteInput | DocenteCarreraCreateOrConnectWithoutDocenteInput[]
    createMany?: DocenteCarreraCreateManyDocenteInputEnvelope
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
  }

  export type DictanUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<DictanCreateWithoutDocenteInput, DictanUncheckedCreateWithoutDocenteInput> | DictanCreateWithoutDocenteInput[] | DictanUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutDocenteInput | DictanCreateOrConnectWithoutDocenteInput[]
    upsert?: DictanUpsertWithWhereUniqueWithoutDocenteInput | DictanUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: DictanCreateManyDocenteInputEnvelope
    set?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    disconnect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    delete?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    update?: DictanUpdateWithWhereUniqueWithoutDocenteInput | DictanUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: DictanUpdateManyWithWhereWithoutDocenteInput | DictanUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: DictanScalarWhereInput | DictanScalarWhereInput[]
  }

  export type DocenteCarreraUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<DocenteCarreraCreateWithoutDocenteInput, DocenteCarreraUncheckedCreateWithoutDocenteInput> | DocenteCarreraCreateWithoutDocenteInput[] | DocenteCarreraUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutDocenteInput | DocenteCarreraCreateOrConnectWithoutDocenteInput[]
    upsert?: DocenteCarreraUpsertWithWhereUniqueWithoutDocenteInput | DocenteCarreraUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: DocenteCarreraCreateManyDocenteInputEnvelope
    set?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    disconnect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    delete?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    update?: DocenteCarreraUpdateWithWhereUniqueWithoutDocenteInput | DocenteCarreraUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: DocenteCarreraUpdateManyWithWhereWithoutDocenteInput | DocenteCarreraUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: DocenteCarreraScalarWhereInput | DocenteCarreraScalarWhereInput[]
  }

  export type DictanUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<DictanCreateWithoutDocenteInput, DictanUncheckedCreateWithoutDocenteInput> | DictanCreateWithoutDocenteInput[] | DictanUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictanCreateOrConnectWithoutDocenteInput | DictanCreateOrConnectWithoutDocenteInput[]
    upsert?: DictanUpsertWithWhereUniqueWithoutDocenteInput | DictanUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: DictanCreateManyDocenteInputEnvelope
    set?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    disconnect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    delete?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    connect?: DictanWhereUniqueInput | DictanWhereUniqueInput[]
    update?: DictanUpdateWithWhereUniqueWithoutDocenteInput | DictanUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: DictanUpdateManyWithWhereWithoutDocenteInput | DictanUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: DictanScalarWhereInput | DictanScalarWhereInput[]
  }

  export type DocenteCarreraUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<DocenteCarreraCreateWithoutDocenteInput, DocenteCarreraUncheckedCreateWithoutDocenteInput> | DocenteCarreraCreateWithoutDocenteInput[] | DocenteCarreraUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DocenteCarreraCreateOrConnectWithoutDocenteInput | DocenteCarreraCreateOrConnectWithoutDocenteInput[]
    upsert?: DocenteCarreraUpsertWithWhereUniqueWithoutDocenteInput | DocenteCarreraUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: DocenteCarreraCreateManyDocenteInputEnvelope
    set?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    disconnect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    delete?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    connect?: DocenteCarreraWhereUniqueInput | DocenteCarreraWhereUniqueInput[]
    update?: DocenteCarreraUpdateWithWhereUniqueWithoutDocenteInput | DocenteCarreraUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: DocenteCarreraUpdateManyWithWhereWithoutDocenteInput | DocenteCarreraUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: DocenteCarreraScalarWhereInput | DocenteCarreraScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<CarreraCreateWithoutRegistrosInput, CarreraUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutRegistrosInput
    connect?: CarreraWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<MateriaCreateWithoutRegistrosInput, MateriaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutRegistrosInput
    connect?: MateriaWhereUniqueInput
  }

  export type CarreraUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<CarreraCreateWithoutRegistrosInput, CarreraUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutRegistrosInput
    upsert?: CarreraUpsertWithoutRegistrosInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutRegistrosInput, CarreraUpdateWithoutRegistrosInput>, CarreraUncheckedUpdateWithoutRegistrosInput>
  }

  export type MateriaUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<MateriaCreateWithoutRegistrosInput, MateriaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutRegistrosInput
    upsert?: MateriaUpsertWithoutRegistrosInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutRegistrosInput, MateriaUpdateWithoutRegistrosInput>, MateriaUncheckedUpdateWithoutRegistrosInput>
  }

  export type EstudianteCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutInscripcionesInput
    connect?: EstudianteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutInscripcionesInput
    connect?: MateriaWhereUniqueInput
  }

  export type EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutInscripcionesInput
    upsert?: EstudianteUpsertWithoutInscripcionesInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutInscripcionesInput, EstudianteUpdateWithoutInscripcionesInput>, EstudianteUncheckedUpdateWithoutInscripcionesInput>
  }

  export type MateriaUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutInscripcionesInput
    upsert?: MateriaUpsertWithoutInscripcionesInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutInscripcionesInput, MateriaUpdateWithoutInscripcionesInput>, MateriaUncheckedUpdateWithoutInscripcionesInput>
  }

  export type DocenteCreateNestedOneWithoutDictanInput = {
    create?: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutDictanInput
    connect?: DocenteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutDictanInput = {
    create?: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDictanInput
    connect?: MateriaWhereUniqueInput
  }

  export type DocenteUpdateOneRequiredWithoutDictanNestedInput = {
    create?: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutDictanInput
    upsert?: DocenteUpsertWithoutDictanInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutDictanInput, DocenteUpdateWithoutDictanInput>, DocenteUncheckedUpdateWithoutDictanInput>
  }

  export type MateriaUpdateOneRequiredWithoutDictanNestedInput = {
    create?: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDictanInput
    upsert?: MateriaUpsertWithoutDictanInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutDictanInput, MateriaUpdateWithoutDictanInput>, MateriaUncheckedUpdateWithoutDictanInput>
  }

  export type DocenteCreateNestedOneWithoutDocentesCarreraInput = {
    create?: XOR<DocenteCreateWithoutDocentesCarreraInput, DocenteUncheckedCreateWithoutDocentesCarreraInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutDocentesCarreraInput
    connect?: DocenteWhereUniqueInput
  }

  export type CarreraCreateNestedOneWithoutDocentesCarreraInput = {
    create?: XOR<CarreraCreateWithoutDocentesCarreraInput, CarreraUncheckedCreateWithoutDocentesCarreraInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutDocentesCarreraInput
    connect?: CarreraWhereUniqueInput
  }

  export type DocenteUpdateOneRequiredWithoutDocentesCarreraNestedInput = {
    create?: XOR<DocenteCreateWithoutDocentesCarreraInput, DocenteUncheckedCreateWithoutDocentesCarreraInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutDocentesCarreraInput
    upsert?: DocenteUpsertWithoutDocentesCarreraInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutDocentesCarreraInput, DocenteUpdateWithoutDocentesCarreraInput>, DocenteUncheckedUpdateWithoutDocentesCarreraInput>
  }

  export type CarreraUpdateOneRequiredWithoutDocentesCarreraNestedInput = {
    create?: XOR<CarreraCreateWithoutDocentesCarreraInput, CarreraUncheckedCreateWithoutDocentesCarreraInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutDocentesCarreraInput
    upsert?: CarreraUpsertWithoutDocentesCarreraInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutDocentesCarreraInput, CarreraUpdateWithoutDocentesCarreraInput>, CarreraUncheckedUpdateWithoutDocentesCarreraInput>
  }

  export type UsuarioRolCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type UsuarioRolUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutUsuarioInput | UsuarioRolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutUsuarioInput | UsuarioRolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioRolCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioRolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type RolPermisoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioRolUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutRolInput | UsuarioRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutRolInput | UsuarioRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutRolInput | UsuarioRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioRolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutRolInput | UsuarioRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutRolInput | UsuarioRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutRolInput | UsuarioRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRolesInput = {
    create?: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesInput
    upsert?: UsuarioUpsertWithoutRolesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRolesInput, UsuarioUpdateWithoutRolesInput>, UsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type PermisoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    upsert?: PermisoUpsertWithoutRolesInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolesInput, PermisoUpdateWithoutRolesInput>, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EstudianteCreateWithoutCarreraInput = {
    nombre: string
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteCreateManyCarreraInputEnvelope = {
    data: EstudianteCreateManyCarreraInput | EstudianteCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type DocenteCarreraCreateWithoutCarreraInput = {
    docente: DocenteCreateNestedOneWithoutDocentesCarreraInput
  }

  export type DocenteCarreraUncheckedCreateWithoutCarreraInput = {
    id?: number
    docenteId: number
  }

  export type DocenteCarreraCreateOrConnectWithoutCarreraInput = {
    where: DocenteCarreraWhereUniqueInput
    create: XOR<DocenteCarreraCreateWithoutCarreraInput, DocenteCarreraUncheckedCreateWithoutCarreraInput>
  }

  export type DocenteCarreraCreateManyCarreraInputEnvelope = {
    data: DocenteCarreraCreateManyCarreraInput | DocenteCarreraCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MateriaCreateWithoutCarrerasInput = {
    nombre: string
    registros?: RegistroCreateNestedManyWithoutMateriaInput
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    dictan?: DictanCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutCarrerasInput = {
    id?: number
    nombre: string
    registros?: RegistroUncheckedCreateNestedManyWithoutMateriaInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictanUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutCarrerasInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCarrerasInput, MateriaUncheckedCreateWithoutCarrerasInput>
  }

  export type RegistroCreateWithoutCarreraInput = {
    materia: MateriaCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateWithoutCarreraInput = {
    id?: number
    materiaId: number
  }

  export type RegistroCreateOrConnectWithoutCarreraInput = {
    where: RegistroWhereUniqueInput
    create: XOR<RegistroCreateWithoutCarreraInput, RegistroUncheckedCreateWithoutCarreraInput>
  }

  export type RegistroCreateManyCarreraInputEnvelope = {
    data: RegistroCreateManyCarreraInput | RegistroCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type EstudianteUpsertWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    update: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteUpdateWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    data: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
  }

  export type EstudianteUpdateManyWithWhereWithoutCarreraInput = {
    where: EstudianteScalarWhereInput
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyWithoutCarreraInput>
  }

  export type EstudianteScalarWhereInput = {
    AND?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    OR?: EstudianteScalarWhereInput[]
    NOT?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    carreraId?: IntFilter<"Estudiante"> | number
  }

  export type DocenteCarreraUpsertWithWhereUniqueWithoutCarreraInput = {
    where: DocenteCarreraWhereUniqueInput
    update: XOR<DocenteCarreraUpdateWithoutCarreraInput, DocenteCarreraUncheckedUpdateWithoutCarreraInput>
    create: XOR<DocenteCarreraCreateWithoutCarreraInput, DocenteCarreraUncheckedCreateWithoutCarreraInput>
  }

  export type DocenteCarreraUpdateWithWhereUniqueWithoutCarreraInput = {
    where: DocenteCarreraWhereUniqueInput
    data: XOR<DocenteCarreraUpdateWithoutCarreraInput, DocenteCarreraUncheckedUpdateWithoutCarreraInput>
  }

  export type DocenteCarreraUpdateManyWithWhereWithoutCarreraInput = {
    where: DocenteCarreraScalarWhereInput
    data: XOR<DocenteCarreraUpdateManyMutationInput, DocenteCarreraUncheckedUpdateManyWithoutCarreraInput>
  }

  export type DocenteCarreraScalarWhereInput = {
    AND?: DocenteCarreraScalarWhereInput | DocenteCarreraScalarWhereInput[]
    OR?: DocenteCarreraScalarWhereInput[]
    NOT?: DocenteCarreraScalarWhereInput | DocenteCarreraScalarWhereInput[]
    id?: IntFilter<"DocenteCarrera"> | number
    docenteId?: IntFilter<"DocenteCarrera"> | number
    carreraId?: IntFilter<"DocenteCarrera"> | number
  }

  export type MateriaUpsertWithWhereUniqueWithoutCarrerasInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCarrerasInput, MateriaUncheckedUpdateWithoutCarrerasInput>
    create: XOR<MateriaCreateWithoutCarrerasInput, MateriaUncheckedCreateWithoutCarrerasInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCarrerasInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCarrerasInput, MateriaUncheckedUpdateWithoutCarrerasInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCarrerasInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCarrerasInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
  }

  export type RegistroUpsertWithWhereUniqueWithoutCarreraInput = {
    where: RegistroWhereUniqueInput
    update: XOR<RegistroUpdateWithoutCarreraInput, RegistroUncheckedUpdateWithoutCarreraInput>
    create: XOR<RegistroCreateWithoutCarreraInput, RegistroUncheckedCreateWithoutCarreraInput>
  }

  export type RegistroUpdateWithWhereUniqueWithoutCarreraInput = {
    where: RegistroWhereUniqueInput
    data: XOR<RegistroUpdateWithoutCarreraInput, RegistroUncheckedUpdateWithoutCarreraInput>
  }

  export type RegistroUpdateManyWithWhereWithoutCarreraInput = {
    where: RegistroScalarWhereInput
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyWithoutCarreraInput>
  }

  export type RegistroScalarWhereInput = {
    AND?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
    OR?: RegistroScalarWhereInput[]
    NOT?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
    id?: IntFilter<"Registro"> | number
    carreraId?: IntFilter<"Registro"> | number
    materiaId?: IntFilter<"Registro"> | number
  }

  export type RegistroCreateWithoutMateriaInput = {
    carrera: CarreraCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateWithoutMateriaInput = {
    id?: number
    carreraId: number
  }

  export type RegistroCreateOrConnectWithoutMateriaInput = {
    where: RegistroWhereUniqueInput
    create: XOR<RegistroCreateWithoutMateriaInput, RegistroUncheckedCreateWithoutMateriaInput>
  }

  export type RegistroCreateManyMateriaInputEnvelope = {
    data: RegistroCreateManyMateriaInput | RegistroCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type InscripcionCreateWithoutMateriaInput = {
    estudiante: EstudianteCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutMateriaInput = {
    id?: number
    estudianteId: number
  }

  export type InscripcionCreateOrConnectWithoutMateriaInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput>
  }

  export type InscripcionCreateManyMateriaInputEnvelope = {
    data: InscripcionCreateManyMateriaInput | InscripcionCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type DictanCreateWithoutMateriaInput = {
    docente: DocenteCreateNestedOneWithoutDictanInput
  }

  export type DictanUncheckedCreateWithoutMateriaInput = {
    id?: number
    docenteId: number
  }

  export type DictanCreateOrConnectWithoutMateriaInput = {
    where: DictanWhereUniqueInput
    create: XOR<DictanCreateWithoutMateriaInput, DictanUncheckedCreateWithoutMateriaInput>
  }

  export type DictanCreateManyMateriaInputEnvelope = {
    data: DictanCreateManyMateriaInput | DictanCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CarreraCreateWithoutMateriasInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    docentesCarrera?: DocenteCarreraCreateNestedManyWithoutCarreraInput
    registros?: RegistroCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    docentesCarrera?: DocenteCarreraUncheckedCreateNestedManyWithoutCarreraInput
    registros?: RegistroUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
  }

  export type RegistroUpsertWithWhereUniqueWithoutMateriaInput = {
    where: RegistroWhereUniqueInput
    update: XOR<RegistroUpdateWithoutMateriaInput, RegistroUncheckedUpdateWithoutMateriaInput>
    create: XOR<RegistroCreateWithoutMateriaInput, RegistroUncheckedCreateWithoutMateriaInput>
  }

  export type RegistroUpdateWithWhereUniqueWithoutMateriaInput = {
    where: RegistroWhereUniqueInput
    data: XOR<RegistroUpdateWithoutMateriaInput, RegistroUncheckedUpdateWithoutMateriaInput>
  }

  export type RegistroUpdateManyWithWhereWithoutMateriaInput = {
    where: RegistroScalarWhereInput
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyWithoutMateriaInput>
  }

  export type InscripcionUpsertWithWhereUniqueWithoutMateriaInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutMateriaInput, InscripcionUncheckedUpdateWithoutMateriaInput>
    create: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutMateriaInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutMateriaInput, InscripcionUncheckedUpdateWithoutMateriaInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutMateriaInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutMateriaInput>
  }

  export type InscripcionScalarWhereInput = {
    AND?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    OR?: InscripcionScalarWhereInput[]
    NOT?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    estudianteId?: IntFilter<"Inscripcion"> | number
    materiaId?: IntFilter<"Inscripcion"> | number
  }

  export type DictanUpsertWithWhereUniqueWithoutMateriaInput = {
    where: DictanWhereUniqueInput
    update: XOR<DictanUpdateWithoutMateriaInput, DictanUncheckedUpdateWithoutMateriaInput>
    create: XOR<DictanCreateWithoutMateriaInput, DictanUncheckedCreateWithoutMateriaInput>
  }

  export type DictanUpdateWithWhereUniqueWithoutMateriaInput = {
    where: DictanWhereUniqueInput
    data: XOR<DictanUpdateWithoutMateriaInput, DictanUncheckedUpdateWithoutMateriaInput>
  }

  export type DictanUpdateManyWithWhereWithoutMateriaInput = {
    where: DictanScalarWhereInput
    data: XOR<DictanUpdateManyMutationInput, DictanUncheckedUpdateManyWithoutMateriaInput>
  }

  export type DictanScalarWhereInput = {
    AND?: DictanScalarWhereInput | DictanScalarWhereInput[]
    OR?: DictanScalarWhereInput[]
    NOT?: DictanScalarWhereInput | DictanScalarWhereInput[]
    id?: IntFilter<"Dictan"> | number
    docenteId?: IntFilter<"Dictan"> | number
    materiaId?: IntFilter<"Dictan"> | number
  }

  export type CarreraUpsertWithWhereUniqueWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    update: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
  }

  export type CarreraUpdateWithWhereUniqueWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    data: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type CarreraUpdateManyWithWhereWithoutMateriasInput = {
    where: CarreraScalarWhereInput
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyWithoutMateriasInput>
  }

  export type CarreraScalarWhereInput = {
    AND?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
    OR?: CarreraScalarWhereInput[]
    NOT?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
  }

  export type CarreraCreateWithoutEstudiantesInput = {
    nombre: string
    docentesCarrera?: DocenteCarreraCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarrerasInput
    registros?: RegistroCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutEstudiantesInput = {
    id?: number
    nombre: string
    docentesCarrera?: DocenteCarreraUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarrerasInput
    registros?: RegistroUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutEstudiantesInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
  }

  export type InscripcionCreateWithoutEstudianteInput = {
    materia: MateriaCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutEstudianteInput = {
    id?: number
    materiaId: number
  }

  export type InscripcionCreateOrConnectWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionCreateManyEstudianteInputEnvelope = {
    data: InscripcionCreateManyEstudianteInput | InscripcionCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutEstudiantesInput = {
    update: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type CarreraUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    docentesCarrera?: DocenteCarreraUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarrerasNestedInput
    registros?: RegistroUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutEstudiantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    docentesCarrera?: DocenteCarreraUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarrerasNestedInput
    registros?: RegistroUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutEstudianteInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type DictanCreateWithoutDocenteInput = {
    materia: MateriaCreateNestedOneWithoutDictanInput
  }

  export type DictanUncheckedCreateWithoutDocenteInput = {
    id?: number
    materiaId: number
  }

  export type DictanCreateOrConnectWithoutDocenteInput = {
    where: DictanWhereUniqueInput
    create: XOR<DictanCreateWithoutDocenteInput, DictanUncheckedCreateWithoutDocenteInput>
  }

  export type DictanCreateManyDocenteInputEnvelope = {
    data: DictanCreateManyDocenteInput | DictanCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type DocenteCarreraCreateWithoutDocenteInput = {
    carrera: CarreraCreateNestedOneWithoutDocentesCarreraInput
  }

  export type DocenteCarreraUncheckedCreateWithoutDocenteInput = {
    id?: number
    carreraId: number
  }

  export type DocenteCarreraCreateOrConnectWithoutDocenteInput = {
    where: DocenteCarreraWhereUniqueInput
    create: XOR<DocenteCarreraCreateWithoutDocenteInput, DocenteCarreraUncheckedCreateWithoutDocenteInput>
  }

  export type DocenteCarreraCreateManyDocenteInputEnvelope = {
    data: DocenteCarreraCreateManyDocenteInput | DocenteCarreraCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type DictanUpsertWithWhereUniqueWithoutDocenteInput = {
    where: DictanWhereUniqueInput
    update: XOR<DictanUpdateWithoutDocenteInput, DictanUncheckedUpdateWithoutDocenteInput>
    create: XOR<DictanCreateWithoutDocenteInput, DictanUncheckedCreateWithoutDocenteInput>
  }

  export type DictanUpdateWithWhereUniqueWithoutDocenteInput = {
    where: DictanWhereUniqueInput
    data: XOR<DictanUpdateWithoutDocenteInput, DictanUncheckedUpdateWithoutDocenteInput>
  }

  export type DictanUpdateManyWithWhereWithoutDocenteInput = {
    where: DictanScalarWhereInput
    data: XOR<DictanUpdateManyMutationInput, DictanUncheckedUpdateManyWithoutDocenteInput>
  }

  export type DocenteCarreraUpsertWithWhereUniqueWithoutDocenteInput = {
    where: DocenteCarreraWhereUniqueInput
    update: XOR<DocenteCarreraUpdateWithoutDocenteInput, DocenteCarreraUncheckedUpdateWithoutDocenteInput>
    create: XOR<DocenteCarreraCreateWithoutDocenteInput, DocenteCarreraUncheckedCreateWithoutDocenteInput>
  }

  export type DocenteCarreraUpdateWithWhereUniqueWithoutDocenteInput = {
    where: DocenteCarreraWhereUniqueInput
    data: XOR<DocenteCarreraUpdateWithoutDocenteInput, DocenteCarreraUncheckedUpdateWithoutDocenteInput>
  }

  export type DocenteCarreraUpdateManyWithWhereWithoutDocenteInput = {
    where: DocenteCarreraScalarWhereInput
    data: XOR<DocenteCarreraUpdateManyMutationInput, DocenteCarreraUncheckedUpdateManyWithoutDocenteInput>
  }

  export type CarreraCreateWithoutRegistrosInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    docentesCarrera?: DocenteCarreraCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarrerasInput
  }

  export type CarreraUncheckedCreateWithoutRegistrosInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    docentesCarrera?: DocenteCarreraUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarrerasInput
  }

  export type CarreraCreateOrConnectWithoutRegistrosInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutRegistrosInput, CarreraUncheckedCreateWithoutRegistrosInput>
  }

  export type MateriaCreateWithoutRegistrosInput = {
    nombre: string
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    dictan?: DictanCreateNestedManyWithoutMateriaInput
    carreras?: CarreraCreateNestedManyWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutRegistrosInput = {
    id?: number
    nombre: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictanUncheckedCreateNestedManyWithoutMateriaInput
    carreras?: CarreraUncheckedCreateNestedManyWithoutMateriasInput
  }

  export type MateriaCreateOrConnectWithoutRegistrosInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutRegistrosInput, MateriaUncheckedCreateWithoutRegistrosInput>
  }

  export type CarreraUpsertWithoutRegistrosInput = {
    update: XOR<CarreraUpdateWithoutRegistrosInput, CarreraUncheckedUpdateWithoutRegistrosInput>
    create: XOR<CarreraCreateWithoutRegistrosInput, CarreraUncheckedCreateWithoutRegistrosInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutRegistrosInput, CarreraUncheckedUpdateWithoutRegistrosInput>
  }

  export type CarreraUpdateWithoutRegistrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    docentesCarrera?: DocenteCarreraUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarrerasNestedInput
  }

  export type CarreraUncheckedUpdateWithoutRegistrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    docentesCarrera?: DocenteCarreraUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarrerasNestedInput
  }

  export type MateriaUpsertWithoutRegistrosInput = {
    update: XOR<MateriaUpdateWithoutRegistrosInput, MateriaUncheckedUpdateWithoutRegistrosInput>
    create: XOR<MateriaCreateWithoutRegistrosInput, MateriaUncheckedCreateWithoutRegistrosInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutRegistrosInput, MateriaUncheckedUpdateWithoutRegistrosInput>
  }

  export type MateriaUpdateWithoutRegistrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUpdateManyWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutRegistrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUncheckedUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUncheckedUpdateManyWithoutMateriasNestedInput
  }

  export type EstudianteCreateWithoutInscripcionesInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
  }

  export type EstudianteUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    carreraId: number
  }

  export type EstudianteCreateOrConnectWithoutInscripcionesInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
  }

  export type MateriaCreateWithoutInscripcionesInput = {
    nombre: string
    registros?: RegistroCreateNestedManyWithoutMateriaInput
    dictan?: DictanCreateNestedManyWithoutMateriaInput
    carreras?: CarreraCreateNestedManyWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    registros?: RegistroUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictanUncheckedCreateNestedManyWithoutMateriaInput
    carreras?: CarreraUncheckedCreateNestedManyWithoutMateriasInput
  }

  export type MateriaCreateOrConnectWithoutInscripcionesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
  }

  export type EstudianteUpsertWithoutInscripcionesInput = {
    update: XOR<EstudianteUpdateWithoutInscripcionesInput, EstudianteUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutInscripcionesInput, EstudianteUncheckedUpdateWithoutInscripcionesInput>
  }

  export type EstudianteUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaUpsertWithoutInscripcionesInput = {
    update: XOR<MateriaUpdateWithoutInscripcionesInput, MateriaUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutInscripcionesInput, MateriaUncheckedUpdateWithoutInscripcionesInput>
  }

  export type MateriaUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUpdateManyWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUncheckedUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUncheckedUpdateManyWithoutMateriasNestedInput
  }

  export type DocenteCreateWithoutDictanInput = {
    nombre: string
    docentesCarrera?: DocenteCarreraCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateWithoutDictanInput = {
    id?: number
    nombre: string
    docentesCarrera?: DocenteCarreraUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteCreateOrConnectWithoutDictanInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
  }

  export type MateriaCreateWithoutDictanInput = {
    nombre: string
    registros?: RegistroCreateNestedManyWithoutMateriaInput
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    carreras?: CarreraCreateNestedManyWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutDictanInput = {
    id?: number
    nombre: string
    registros?: RegistroUncheckedCreateNestedManyWithoutMateriaInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    carreras?: CarreraUncheckedCreateNestedManyWithoutMateriasInput
  }

  export type MateriaCreateOrConnectWithoutDictanInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
  }

  export type DocenteUpsertWithoutDictanInput = {
    update: XOR<DocenteUpdateWithoutDictanInput, DocenteUncheckedUpdateWithoutDictanInput>
    create: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutDictanInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutDictanInput, DocenteUncheckedUpdateWithoutDictanInput>
  }

  export type DocenteUpdateWithoutDictanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    docentesCarrera?: DocenteCarreraUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateWithoutDictanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    docentesCarrera?: DocenteCarreraUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type MateriaUpsertWithoutDictanInput = {
    update: XOR<MateriaUpdateWithoutDictanInput, MateriaUncheckedUpdateWithoutDictanInput>
    create: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutDictanInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutDictanInput, MateriaUncheckedUpdateWithoutDictanInput>
  }

  export type MateriaUpdateWithoutDictanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUpdateManyWithoutMateriaNestedInput
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUpdateManyWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutDictanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUncheckedUpdateManyWithoutMateriaNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    carreras?: CarreraUncheckedUpdateManyWithoutMateriasNestedInput
  }

  export type DocenteCreateWithoutDocentesCarreraInput = {
    nombre: string
    dictan?: DictanCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateWithoutDocentesCarreraInput = {
    id?: number
    nombre: string
    dictan?: DictanUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteCreateOrConnectWithoutDocentesCarreraInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutDocentesCarreraInput, DocenteUncheckedCreateWithoutDocentesCarreraInput>
  }

  export type CarreraCreateWithoutDocentesCarreraInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarrerasInput
    registros?: RegistroCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutDocentesCarreraInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarrerasInput
    registros?: RegistroUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutDocentesCarreraInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutDocentesCarreraInput, CarreraUncheckedCreateWithoutDocentesCarreraInput>
  }

  export type DocenteUpsertWithoutDocentesCarreraInput = {
    update: XOR<DocenteUpdateWithoutDocentesCarreraInput, DocenteUncheckedUpdateWithoutDocentesCarreraInput>
    create: XOR<DocenteCreateWithoutDocentesCarreraInput, DocenteUncheckedCreateWithoutDocentesCarreraInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutDocentesCarreraInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutDocentesCarreraInput, DocenteUncheckedUpdateWithoutDocentesCarreraInput>
  }

  export type DocenteUpdateWithoutDocentesCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictanUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateWithoutDocentesCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictanUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type CarreraUpsertWithoutDocentesCarreraInput = {
    update: XOR<CarreraUpdateWithoutDocentesCarreraInput, CarreraUncheckedUpdateWithoutDocentesCarreraInput>
    create: XOR<CarreraCreateWithoutDocentesCarreraInput, CarreraUncheckedCreateWithoutDocentesCarreraInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutDocentesCarreraInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutDocentesCarreraInput, CarreraUncheckedUpdateWithoutDocentesCarreraInput>
  }

  export type CarreraUpdateWithoutDocentesCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarrerasNestedInput
    registros?: RegistroUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutDocentesCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarrerasNestedInput
    registros?: RegistroUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type UsuarioRolCreateWithoutUsuarioInput = {
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioRolUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rolId: number
  }

  export type UsuarioRolCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    create: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioRolCreateManyUsuarioInputEnvelope = {
    data: UsuarioRolCreateManyUsuarioInput | UsuarioRolCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    update: XOR<UsuarioRolUpdateWithoutUsuarioInput, UsuarioRolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    data: XOR<UsuarioRolUpdateWithoutUsuarioInput, UsuarioRolUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioRolUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioRolScalarWhereInput
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioRolScalarWhereInput = {
    AND?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
    OR?: UsuarioRolScalarWhereInput[]
    NOT?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
    id?: IntFilter<"UsuarioRol"> | number
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
  }

  export type RolPermisoCreateWithoutRolInput = {
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateWithoutRolInput = {
    id?: number
    permisoId: number
  }

  export type RolPermisoCreateOrConnectWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoCreateManyRolInputEnvelope = {
    data: RolPermisoCreateManyRolInput | RolPermisoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioRolCreateWithoutRolInput = {
    usuario: UsuarioCreateNestedOneWithoutRolesInput
  }

  export type UsuarioRolUncheckedCreateWithoutRolInput = {
    id?: number
    usuarioId: number
  }

  export type UsuarioRolCreateOrConnectWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    create: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput>
  }

  export type UsuarioRolCreateManyRolInputEnvelope = {
    data: UsuarioRolCreateManyRolInput | UsuarioRolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoScalarWhereInput = {
    AND?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    OR?: RolPermisoScalarWhereInput[]
    NOT?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
  }

  export type UsuarioRolUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    update: XOR<UsuarioRolUpdateWithoutRolInput, UsuarioRolUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput>
  }

  export type UsuarioRolUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    data: XOR<UsuarioRolUpdateWithoutRolInput, UsuarioRolUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioRolUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioRolScalarWhereInput
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoCreateWithoutPermisoInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoCreateOrConnectWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoCreateManyPermisoInputEnvelope = {
    data: RolPermisoCreateManyPermisoInput | RolPermisoCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutPermisoInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutPermisoInput>
  }

  export type UsuarioCreateWithoutRolesInput = {
    username: string
    password: string
  }

  export type UsuarioUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    password: string
  }

  export type UsuarioCreateOrConnectWithoutRolesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutRolesInput = {
    update: XOR<UsuarioUpdateWithoutRolesInput, UsuarioUncheckedUpdateWithoutRolesInput>
    create: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRolesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRolesInput, UsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type UsuarioUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateWithoutPermisosInput = {
    nombre: string
    usuarios?: UsuarioRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoCreateWithoutRolesInput = {
    nombre: string
  }

  export type PermisoUncheckedCreateWithoutRolesInput = {
    id?: number
    nombre: string
  }

  export type PermisoCreateOrConnectWithoutRolesInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type PermisoUpsertWithoutRolesInput = {
    update: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type PermisoUpdateWithoutRolesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteCreateManyCarreraInput = {
    id?: number
    nombre: string
  }

  export type DocenteCarreraCreateManyCarreraInput = {
    id?: number
    docenteId: number
  }

  export type RegistroCreateManyCarreraInput = {
    id?: number
    materiaId: number
  }

  export type EstudianteUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteCarreraUpdateWithoutCarreraInput = {
    docente?: DocenteUpdateOneRequiredWithoutDocentesCarreraNestedInput
  }

  export type DocenteCarreraUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCarreraUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaUpdateWithoutCarrerasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUpdateManyWithoutMateriaNestedInput
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCarrerasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    registros?: RegistroUncheckedUpdateManyWithoutMateriaNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictanUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutCarrerasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroUpdateWithoutCarreraInput = {
    materia?: MateriaUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroCreateManyMateriaInput = {
    id?: number
    carreraId: number
  }

  export type InscripcionCreateManyMateriaInput = {
    id?: number
    estudianteId: number
  }

  export type DictanCreateManyMateriaInput = {
    id?: number
    docenteId: number
  }

  export type RegistroUpdateWithoutMateriaInput = {
    carrera?: CarreraUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUpdateWithoutMateriaInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type DictanUpdateWithoutMateriaInput = {
    docente?: DocenteUpdateOneRequiredWithoutDictanNestedInput
  }

  export type DictanUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type DictanUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type CarreraUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    docentesCarrera?: DocenteCarreraUpdateManyWithoutCarreraNestedInput
    registros?: RegistroUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    docentesCarrera?: DocenteCarreraUncheckedUpdateManyWithoutCarreraNestedInput
    registros?: RegistroUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateManyWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionCreateManyEstudianteInput = {
    id?: number
    materiaId: number
  }

  export type InscripcionUpdateWithoutEstudianteInput = {
    materia?: MateriaUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictanCreateManyDocenteInput = {
    id?: number
    materiaId: number
  }

  export type DocenteCarreraCreateManyDocenteInput = {
    id?: number
    carreraId: number
  }

  export type DictanUpdateWithoutDocenteInput = {
    materia?: MateriaUpdateOneRequiredWithoutDictanNestedInput
  }

  export type DictanUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictanUncheckedUpdateManyWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCarreraUpdateWithoutDocenteInput = {
    carrera?: CarreraUpdateOneRequiredWithoutDocentesCarreraNestedInput
  }

  export type DocenteCarreraUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCarreraUncheckedUpdateManyWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolCreateManyUsuarioInput = {
    id?: number
    rolId: number
  }

  export type UsuarioRolUpdateWithoutUsuarioInput = {
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioRolUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyRolInput = {
    id?: number
    permisoId: number
  }

  export type UsuarioRolCreateManyRolInput = {
    id?: number
    usuarioId: number
  }

  export type RolPermisoUpdateWithoutRolInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolUpdateWithoutRolInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UsuarioRolUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoUpdateWithoutPermisoInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}