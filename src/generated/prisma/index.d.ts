
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Transaksi
 * 
 */
export type Transaksi = $Result.DefaultSelection<Prisma.$TransaksiPayload>
/**
 * Model DetailTransaksi
 * 
 */
export type DetailTransaksi = $Result.DefaultSelection<Prisma.$DetailTransaksiPayload>
/**
 * Model Siswa
 * 
 */
export type Siswa = $Result.DefaultSelection<Prisma.$SiswaPayload>
/**
 * Model kelas
 * 
 */
export type kelas = $Result.DefaultSelection<Prisma.$kelasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **Transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.TransaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailTransaksi`: Exposes CRUD operations for the **DetailTransaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailTransaksis
    * const detailTransaksis = await prisma.detailTransaksi.findMany()
    * ```
    */
  get detailTransaksi(): Prisma.DetailTransaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siswa`: Exposes CRUD operations for the **Siswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Siswas
    * const siswas = await prisma.siswa.findMany()
    * ```
    */
  get siswa(): Prisma.SiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.kelasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    User: 'User',
    Kategori: 'Kategori',
    Product: 'Product',
    Transaksi: 'Transaksi',
    DetailTransaksi: 'DetailTransaksi',
    Siswa: 'Siswa',
    kelas: 'kelas'
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
      modelProps: "user" | "kategori" | "product" | "transaksi" | "detailTransaksi" | "siswa" | "kelas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Transaksi: {
        payload: Prisma.$TransaksiPayload<ExtArgs>
        fields: Prisma.TransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findMany: {
            args: Prisma.TransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          create: {
            args: Prisma.TransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          createMany: {
            args: Prisma.TransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          update: {
            args: Prisma.TransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.TransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      DetailTransaksi: {
        payload: Prisma.$DetailTransaksiPayload<ExtArgs>
        fields: Prisma.DetailTransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailTransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailTransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          findFirst: {
            args: Prisma.DetailTransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailTransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          findMany: {
            args: Prisma.DetailTransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>[]
          }
          create: {
            args: Prisma.DetailTransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          createMany: {
            args: Prisma.DetailTransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetailTransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          update: {
            args: Prisma.DetailTransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          deleteMany: {
            args: Prisma.DetailTransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailTransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetailTransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          aggregate: {
            args: Prisma.DetailTransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailTransaksi>
          }
          groupBy: {
            args: Prisma.DetailTransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailTransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailTransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<DetailTransaksiCountAggregateOutputType> | number
          }
        }
      }
      Siswa: {
        payload: Prisma.$SiswaPayload<ExtArgs>
        fields: Prisma.SiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          findFirst: {
            args: Prisma.SiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          findMany: {
            args: Prisma.SiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>[]
          }
          create: {
            args: Prisma.SiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          createMany: {
            args: Prisma.SiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          update: {
            args: Prisma.SiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          deleteMany: {
            args: Prisma.SiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          aggregate: {
            args: Prisma.SiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiswa>
          }
          groupBy: {
            args: Prisma.SiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiswaCountArgs<ExtArgs>
            result: $Utils.Optional<SiswaCountAggregateOutputType> | number
          }
        }
      }
      kelas: {
        payload: Prisma.$kelasPayload<ExtArgs>
        fields: Prisma.kelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          findFirst: {
            args: Prisma.kelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          findMany: {
            args: Prisma.kelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          create: {
            args: Prisma.kelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          createMany: {
            args: Prisma.kelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          update: {
            args: Prisma.kelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          deleteMany: {
            args: Prisma.kelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.kelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.kelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    kategori?: KategoriOmit
    product?: ProductOmit
    transaksi?: TransaksiOmit
    detailTransaksi?: DetailTransaksiOmit
    siswa?: SiswaOmit
    kelas?: kelasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transaksi: number
    produk: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | UserCountOutputTypeCountTransaksiArgs
    produk?: boolean | UserCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    produk: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | KategoriCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    detailTransaksi: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailTransaksi?: boolean | ProductCountOutputTypeCountDetailTransaksiArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDetailTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransaksiWhereInput
  }


  /**
   * Count Type TransaksiCountOutputType
   */

  export type TransaksiCountOutputType = {
    detailTransaksi: number
  }

  export type TransaksiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailTransaksi?: boolean | TransaksiCountOutputTypeCountDetailTransaksiArgs
  }

  // Custom InputTypes
  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiCountOutputType
     */
    select?: TransaksiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeCountDetailTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransaksiWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    siswa: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | KelasCountOutputTypeCountSiswaArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountSiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiswaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    no_hp: string | null
    alamat: string | null
    role: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    no_hp: string | null
    alamat: string | null
    role: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    no_hp: number
    alamat: number
    role: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    no_hp?: true
    alamat?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    no_hp?: true
    alamat?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    no_hp?: true
    alamat?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nama: string
    email: string
    password: string
    no_hp: string | null
    alamat: string | null
    role: string
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    no_hp?: boolean
    alamat?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaksi?: boolean | User$transaksiArgs<ExtArgs>
    produk?: boolean | User$produkArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    no_hp?: boolean
    alamat?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "no_hp" | "alamat" | "role" | "status" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | User$transaksiArgs<ExtArgs>
    produk?: boolean | User$produkArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>[]
      produk: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      password: string
      no_hp: string | null
      alamat: string | null
      role: string
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends User$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, User$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produk<T extends User$produkArgs<ExtArgs> = {}>(args?: Subset<T, User$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly no_hp: FieldRef<"User", 'String'>
    readonly alamat: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.transaksi
   */
  export type User$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * User.produk
   */
  export type User$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id: number | null
    nama: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id?: true
  }

  export type KategoriSumAggregateInputType = {
    id?: true
  }

  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: number
    nama: string
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    produk?: boolean | Kategori$produkArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>



  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "status" | "created_at" | "updated_at", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | Kategori$produkArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      produk: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
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
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends Kategori$produkArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kategori model
   */
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'Int'>
    readonly nama: FieldRef<"Kategori", 'String'>
    readonly status: FieldRef<"Kategori", 'String'>
    readonly created_at: FieldRef<"Kategori", 'DateTime'>
    readonly updated_at: FieldRef<"Kategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.produk
   */
  export type Kategori$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    harga: Decimal | null
    stok: number | null
    userId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    harga: Decimal | null
    stok: number | null
    userId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    nama: string | null
    kategoriId: number | null
    harga: Decimal | null
    stok: number | null
    deskripsi: string | null
    gambar: string | null
    status: string | null
    userId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    kategoriId: number | null
    harga: Decimal | null
    stok: number | null
    deskripsi: string | null
    gambar: string | null
    status: string | null
    userId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    nama: number
    kategoriId: number
    harga: number
    stok: number
    deskripsi: number
    gambar: number
    status: number
    userId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    kategoriId?: true
    harga?: true
    stok?: true
    userId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    kategoriId?: true
    harga?: true
    stok?: true
    userId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    nama?: true
    kategoriId?: true
    harga?: true
    stok?: true
    deskripsi?: true
    gambar?: true
    status?: true
    userId?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    nama?: true
    kategoriId?: true
    harga?: true
    stok?: true
    deskripsi?: true
    gambar?: true
    status?: true
    userId?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    nama?: true
    kategoriId?: true
    harga?: true
    stok?: true
    deskripsi?: true
    gambar?: true
    status?: true
    userId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    nama: string
    kategoriId: number
    harga: Decimal
    stok: number
    deskripsi: string | null
    gambar: string | null
    status: string | null
    userId: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kategoriId?: boolean
    harga?: boolean
    stok?: boolean
    deskripsi?: boolean
    gambar?: boolean
    status?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    user?: boolean | Product$userArgs<ExtArgs>
    detailTransaksi?: boolean | Product$detailTransaksiArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    nama?: boolean
    kategoriId?: boolean
    harga?: boolean
    stok?: boolean
    deskripsi?: boolean
    gambar?: boolean
    status?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kategoriId" | "harga" | "stok" | "deskripsi" | "gambar" | "status" | "userId" | "created_at" | "updated_at", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    user?: boolean | Product$userArgs<ExtArgs>
    detailTransaksi?: boolean | Product$detailTransaksiArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      detailTransaksi: Prisma.$DetailTransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      kategoriId: number
      harga: Prisma.Decimal
      stok: number
      deskripsi: string | null
      gambar: string | null
      status: string | null
      userId: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Product$userArgs<ExtArgs> = {}>(args?: Subset<T, Product$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detailTransaksi<T extends Product$detailTransaksiArgs<ExtArgs> = {}>(args?: Subset<T, Product$detailTransaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly nama: FieldRef<"Product", 'String'>
    readonly kategoriId: FieldRef<"Product", 'Int'>
    readonly harga: FieldRef<"Product", 'Decimal'>
    readonly stok: FieldRef<"Product", 'Int'>
    readonly deskripsi: FieldRef<"Product", 'String'>
    readonly gambar: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly userId: FieldRef<"Product", 'Int'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.user
   */
  export type Product$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.detailTransaksi
   */
  export type Product$detailTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    where?: DetailTransaksiWhereInput
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    cursor?: DetailTransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    total_harga: Decimal | null
    diskon: Decimal | null
  }

  export type TransaksiSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    total_harga: Decimal | null
    diskon: Decimal | null
  }

  export type TransaksiMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    nama_konter: string | null
    total_harga: Decimal | null
    diskon: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    nama_konter: string | null
    total_harga: Decimal | null
    diskon: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransaksiCountAggregateOutputType = {
    id: number
    id_user: number
    nama_konter: number
    total_harga: number
    diskon: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id?: true
    id_user?: true
    total_harga?: true
    diskon?: true
  }

  export type TransaksiSumAggregateInputType = {
    id?: true
    id_user?: true
    total_harga?: true
    diskon?: true
  }

  export type TransaksiMinAggregateInputType = {
    id?: true
    id_user?: true
    nama_konter?: true
    total_harga?: true
    diskon?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id?: true
    id_user?: true
    nama_konter?: true
    total_harga?: true
    diskon?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TransaksiCountAggregateInputType = {
    id?: true
    id_user?: true
    nama_konter?: true
    total_harga?: true
    diskon?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksi to aggregate.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type TransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithAggregationInput | TransaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: TransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id: number
    id_user: number
    nama_konter: string | null
    total_harga: Decimal
    diskon: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends TransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    nama_konter?: boolean
    total_harga?: boolean
    diskon?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    detailTransaksi?: boolean | Transaksi$detailTransaksiArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>



  export type TransaksiSelectScalar = {
    id?: boolean
    id_user?: boolean
    nama_konter?: boolean
    total_harga?: boolean
    diskon?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TransaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "nama_konter" | "total_harga" | "diskon" | "status" | "created_at" | "updated_at", ExtArgs["result"]["transaksi"]>
  export type TransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    detailTransaksi?: boolean | Transaksi$detailTransaksiArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaksi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      detailTransaksi: Prisma.$DetailTransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
      nama_konter: string | null
      total_harga: Prisma.Decimal
      diskon: Prisma.Decimal | null
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type TransaksiGetPayload<S extends boolean | null | undefined | TransaksiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPayload, S>

  type TransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface TransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaksi'], meta: { name: 'Transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {TransaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiFindUniqueArgs>(args: SelectSubset<T, TransaksiFindUniqueArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiFindFirstArgs>(args?: SelectSubset<T, TransaksiFindFirstArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiFindManyArgs>(args?: SelectSubset<T, TransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {TransaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends TransaksiCreateArgs>(args: SelectSubset<T, TransaksiCreateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {TransaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiCreateManyArgs>(args?: SelectSubset<T, TransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaksi.
     * @param {TransaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends TransaksiDeleteArgs>(args: SelectSubset<T, TransaksiDeleteArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {TransaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiUpdateArgs>(args: SelectSubset<T, TransaksiUpdateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {TransaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiDeleteManyArgs>(args?: SelectSubset<T, TransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiUpdateManyArgs>(args: SelectSubset<T, TransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi.
     * @param {TransaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiUpsertArgs>(args: SelectSubset<T, TransaksiUpsertArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends TransaksiCountArgs>(
      args?: Subset<T, TransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiGroupByArgs} args - Group by arguments.
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
      T extends TransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaksi model
   */
  readonly fields: TransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detailTransaksi<T extends Transaksi$detailTransaksiArgs<ExtArgs> = {}>(args?: Subset<T, Transaksi$detailTransaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaksi model
   */
  interface TransaksiFieldRefs {
    readonly id: FieldRef<"Transaksi", 'Int'>
    readonly id_user: FieldRef<"Transaksi", 'Int'>
    readonly nama_konter: FieldRef<"Transaksi", 'String'>
    readonly total_harga: FieldRef<"Transaksi", 'Decimal'>
    readonly diskon: FieldRef<"Transaksi", 'Decimal'>
    readonly status: FieldRef<"Transaksi", 'String'>
    readonly created_at: FieldRef<"Transaksi", 'DateTime'>
    readonly updated_at: FieldRef<"Transaksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaksi findUnique
   */
  export type TransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findUniqueOrThrow
   */
  export type TransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findFirst
   */
  export type TransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findFirstOrThrow
   */
  export type TransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findMany
   */
  export type TransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksis to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi create
   */
  export type TransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaksi.
     */
    data: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
  }

  /**
   * Transaksi createMany
   */
  export type TransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi update
   */
  export type TransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaksi.
     */
    data: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
    /**
     * Choose, which Transaksi to update.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi updateMany
   */
  export type TransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to update.
     */
    limit?: number
  }

  /**
   * Transaksi upsert
   */
  export type TransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaksi to update in case it exists.
     */
    where: TransaksiWhereUniqueInput
    /**
     * In case the Transaksi found by the `where` argument doesn't exist, create a new Transaksi with this data.
     */
    create: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
    /**
     * In case the Transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
  }

  /**
   * Transaksi delete
   */
  export type TransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter which Transaksi to delete.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi deleteMany
   */
  export type TransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksis to delete
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to delete.
     */
    limit?: number
  }

  /**
   * Transaksi.detailTransaksi
   */
  export type Transaksi$detailTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    where?: DetailTransaksiWhereInput
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    cursor?: DetailTransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi without action
   */
  export type TransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
  }


  /**
   * Model DetailTransaksi
   */

  export type AggregateDetailTransaksi = {
    _count: DetailTransaksiCountAggregateOutputType | null
    _avg: DetailTransaksiAvgAggregateOutputType | null
    _sum: DetailTransaksiSumAggregateOutputType | null
    _min: DetailTransaksiMinAggregateOutputType | null
    _max: DetailTransaksiMaxAggregateOutputType | null
  }

  export type DetailTransaksiAvgAggregateOutputType = {
    id: number | null
    id_transaksi: number | null
    id_product: number | null
    qty: number | null
    harga_satuan: Decimal | null
    subtotal: Decimal | null
  }

  export type DetailTransaksiSumAggregateOutputType = {
    id: number | null
    id_transaksi: number | null
    id_product: number | null
    qty: number | null
    harga_satuan: Decimal | null
    subtotal: Decimal | null
  }

  export type DetailTransaksiMinAggregateOutputType = {
    id: number | null
    id_transaksi: number | null
    id_product: number | null
    qty: number | null
    harga_satuan: Decimal | null
    subtotal: Decimal | null
  }

  export type DetailTransaksiMaxAggregateOutputType = {
    id: number | null
    id_transaksi: number | null
    id_product: number | null
    qty: number | null
    harga_satuan: Decimal | null
    subtotal: Decimal | null
  }

  export type DetailTransaksiCountAggregateOutputType = {
    id: number
    id_transaksi: number
    id_product: number
    qty: number
    harga_satuan: number
    subtotal: number
    _all: number
  }


  export type DetailTransaksiAvgAggregateInputType = {
    id?: true
    id_transaksi?: true
    id_product?: true
    qty?: true
    harga_satuan?: true
    subtotal?: true
  }

  export type DetailTransaksiSumAggregateInputType = {
    id?: true
    id_transaksi?: true
    id_product?: true
    qty?: true
    harga_satuan?: true
    subtotal?: true
  }

  export type DetailTransaksiMinAggregateInputType = {
    id?: true
    id_transaksi?: true
    id_product?: true
    qty?: true
    harga_satuan?: true
    subtotal?: true
  }

  export type DetailTransaksiMaxAggregateInputType = {
    id?: true
    id_transaksi?: true
    id_product?: true
    qty?: true
    harga_satuan?: true
    subtotal?: true
  }

  export type DetailTransaksiCountAggregateInputType = {
    id?: true
    id_transaksi?: true
    id_product?: true
    qty?: true
    harga_satuan?: true
    subtotal?: true
    _all?: true
  }

  export type DetailTransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailTransaksi to aggregate.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailTransaksis
    **/
    _count?: true | DetailTransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailTransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailTransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailTransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailTransaksiMaxAggregateInputType
  }

  export type GetDetailTransaksiAggregateType<T extends DetailTransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailTransaksi[P]>
      : GetScalarType<T[P], AggregateDetailTransaksi[P]>
  }




  export type DetailTransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransaksiWhereInput
    orderBy?: DetailTransaksiOrderByWithAggregationInput | DetailTransaksiOrderByWithAggregationInput[]
    by: DetailTransaksiScalarFieldEnum[] | DetailTransaksiScalarFieldEnum
    having?: DetailTransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailTransaksiCountAggregateInputType | true
    _avg?: DetailTransaksiAvgAggregateInputType
    _sum?: DetailTransaksiSumAggregateInputType
    _min?: DetailTransaksiMinAggregateInputType
    _max?: DetailTransaksiMaxAggregateInputType
  }

  export type DetailTransaksiGroupByOutputType = {
    id: number
    id_transaksi: number
    id_product: number
    qty: number
    harga_satuan: Decimal
    subtotal: Decimal
    _count: DetailTransaksiCountAggregateOutputType | null
    _avg: DetailTransaksiAvgAggregateOutputType | null
    _sum: DetailTransaksiSumAggregateOutputType | null
    _min: DetailTransaksiMinAggregateOutputType | null
    _max: DetailTransaksiMaxAggregateOutputType | null
  }

  type GetDetailTransaksiGroupByPayload<T extends DetailTransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailTransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailTransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailTransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], DetailTransaksiGroupByOutputType[P]>
        }
      >
    >


  export type DetailTransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_transaksi?: boolean
    id_product?: boolean
    qty?: boolean
    harga_satuan?: boolean
    subtotal?: boolean
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailTransaksi"]>



  export type DetailTransaksiSelectScalar = {
    id?: boolean
    id_transaksi?: boolean
    id_product?: boolean
    qty?: boolean
    harga_satuan?: boolean
    subtotal?: boolean
  }

  export type DetailTransaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_transaksi" | "id_product" | "qty" | "harga_satuan" | "subtotal", ExtArgs["result"]["detailTransaksi"]>
  export type DetailTransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DetailTransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailTransaksi"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_transaksi: number
      id_product: number
      qty: number
      harga_satuan: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["detailTransaksi"]>
    composites: {}
  }

  type DetailTransaksiGetPayload<S extends boolean | null | undefined | DetailTransaksiDefaultArgs> = $Result.GetResult<Prisma.$DetailTransaksiPayload, S>

  type DetailTransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailTransaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailTransaksiCountAggregateInputType | true
    }

  export interface DetailTransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailTransaksi'], meta: { name: 'DetailTransaksi' } }
    /**
     * Find zero or one DetailTransaksi that matches the filter.
     * @param {DetailTransaksiFindUniqueArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailTransaksiFindUniqueArgs>(args: SelectSubset<T, DetailTransaksiFindUniqueArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailTransaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailTransaksiFindUniqueOrThrowArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailTransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailTransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailTransaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiFindFirstArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailTransaksiFindFirstArgs>(args?: SelectSubset<T, DetailTransaksiFindFirstArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailTransaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiFindFirstOrThrowArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailTransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailTransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailTransaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailTransaksis
     * const detailTransaksis = await prisma.detailTransaksi.findMany()
     * 
     * // Get first 10 DetailTransaksis
     * const detailTransaksis = await prisma.detailTransaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailTransaksiWithIdOnly = await prisma.detailTransaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailTransaksiFindManyArgs>(args?: SelectSubset<T, DetailTransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailTransaksi.
     * @param {DetailTransaksiCreateArgs} args - Arguments to create a DetailTransaksi.
     * @example
     * // Create one DetailTransaksi
     * const DetailTransaksi = await prisma.detailTransaksi.create({
     *   data: {
     *     // ... data to create a DetailTransaksi
     *   }
     * })
     * 
     */
    create<T extends DetailTransaksiCreateArgs>(args: SelectSubset<T, DetailTransaksiCreateArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailTransaksis.
     * @param {DetailTransaksiCreateManyArgs} args - Arguments to create many DetailTransaksis.
     * @example
     * // Create many DetailTransaksis
     * const detailTransaksi = await prisma.detailTransaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailTransaksiCreateManyArgs>(args?: SelectSubset<T, DetailTransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailTransaksi.
     * @param {DetailTransaksiDeleteArgs} args - Arguments to delete one DetailTransaksi.
     * @example
     * // Delete one DetailTransaksi
     * const DetailTransaksi = await prisma.detailTransaksi.delete({
     *   where: {
     *     // ... filter to delete one DetailTransaksi
     *   }
     * })
     * 
     */
    delete<T extends DetailTransaksiDeleteArgs>(args: SelectSubset<T, DetailTransaksiDeleteArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailTransaksi.
     * @param {DetailTransaksiUpdateArgs} args - Arguments to update one DetailTransaksi.
     * @example
     * // Update one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailTransaksiUpdateArgs>(args: SelectSubset<T, DetailTransaksiUpdateArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailTransaksis.
     * @param {DetailTransaksiDeleteManyArgs} args - Arguments to filter DetailTransaksis to delete.
     * @example
     * // Delete a few DetailTransaksis
     * const { count } = await prisma.detailTransaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailTransaksiDeleteManyArgs>(args?: SelectSubset<T, DetailTransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailTransaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailTransaksis
     * const detailTransaksi = await prisma.detailTransaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailTransaksiUpdateManyArgs>(args: SelectSubset<T, DetailTransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailTransaksi.
     * @param {DetailTransaksiUpsertArgs} args - Arguments to update or create a DetailTransaksi.
     * @example
     * // Update or create a DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.upsert({
     *   create: {
     *     // ... data to create a DetailTransaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailTransaksi we want to update
     *   }
     * })
     */
    upsert<T extends DetailTransaksiUpsertArgs>(args: SelectSubset<T, DetailTransaksiUpsertArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailTransaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiCountArgs} args - Arguments to filter DetailTransaksis to count.
     * @example
     * // Count the number of DetailTransaksis
     * const count = await prisma.detailTransaksi.count({
     *   where: {
     *     // ... the filter for the DetailTransaksis we want to count
     *   }
     * })
    **/
    count<T extends DetailTransaksiCountArgs>(
      args?: Subset<T, DetailTransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailTransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailTransaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailTransaksiAggregateArgs>(args: Subset<T, DetailTransaksiAggregateArgs>): Prisma.PrismaPromise<GetDetailTransaksiAggregateType<T>>

    /**
     * Group by DetailTransaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiGroupByArgs} args - Group by arguments.
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
      T extends DetailTransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailTransaksiGroupByArgs['orderBy'] }
        : { orderBy?: DetailTransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailTransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailTransaksi model
   */
  readonly fields: DetailTransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailTransaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailTransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends TransaksiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiDefaultArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailTransaksi model
   */
  interface DetailTransaksiFieldRefs {
    readonly id: FieldRef<"DetailTransaksi", 'Int'>
    readonly id_transaksi: FieldRef<"DetailTransaksi", 'Int'>
    readonly id_product: FieldRef<"DetailTransaksi", 'Int'>
    readonly qty: FieldRef<"DetailTransaksi", 'Int'>
    readonly harga_satuan: FieldRef<"DetailTransaksi", 'Decimal'>
    readonly subtotal: FieldRef<"DetailTransaksi", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DetailTransaksi findUnique
   */
  export type DetailTransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi findUniqueOrThrow
   */
  export type DetailTransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi findFirst
   */
  export type DetailTransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailTransaksis.
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransaksis.
     */
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * DetailTransaksi findFirstOrThrow
   */
  export type DetailTransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailTransaksis.
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransaksis.
     */
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * DetailTransaksi findMany
   */
  export type DetailTransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksis to fetch.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailTransaksis.
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * DetailTransaksi create
   */
  export type DetailTransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailTransaksi.
     */
    data: XOR<DetailTransaksiCreateInput, DetailTransaksiUncheckedCreateInput>
  }

  /**
   * DetailTransaksi createMany
   */
  export type DetailTransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailTransaksis.
     */
    data: DetailTransaksiCreateManyInput | DetailTransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailTransaksi update
   */
  export type DetailTransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailTransaksi.
     */
    data: XOR<DetailTransaksiUpdateInput, DetailTransaksiUncheckedUpdateInput>
    /**
     * Choose, which DetailTransaksi to update.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi updateMany
   */
  export type DetailTransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailTransaksis.
     */
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyInput>
    /**
     * Filter which DetailTransaksis to update
     */
    where?: DetailTransaksiWhereInput
    /**
     * Limit how many DetailTransaksis to update.
     */
    limit?: number
  }

  /**
   * DetailTransaksi upsert
   */
  export type DetailTransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailTransaksi to update in case it exists.
     */
    where: DetailTransaksiWhereUniqueInput
    /**
     * In case the DetailTransaksi found by the `where` argument doesn't exist, create a new DetailTransaksi with this data.
     */
    create: XOR<DetailTransaksiCreateInput, DetailTransaksiUncheckedCreateInput>
    /**
     * In case the DetailTransaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailTransaksiUpdateInput, DetailTransaksiUncheckedUpdateInput>
  }

  /**
   * DetailTransaksi delete
   */
  export type DetailTransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter which DetailTransaksi to delete.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi deleteMany
   */
  export type DetailTransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailTransaksis to delete
     */
    where?: DetailTransaksiWhereInput
    /**
     * Limit how many DetailTransaksis to delete.
     */
    limit?: number
  }

  /**
   * DetailTransaksi without action
   */
  export type DetailTransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
  }


  /**
   * Model Siswa
   */

  export type AggregateSiswa = {
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  export type SiswaAvgAggregateOutputType = {
    id: number | null
    nis: number | null
    kelasId: number | null
  }

  export type SiswaSumAggregateOutputType = {
    id: number | null
    nis: number | null
    kelasId: number | null
  }

  export type SiswaMinAggregateOutputType = {
    id: number | null
    nis: number | null
    nama: string | null
    kelasId: number | null
  }

  export type SiswaMaxAggregateOutputType = {
    id: number | null
    nis: number | null
    nama: string | null
    kelasId: number | null
  }

  export type SiswaCountAggregateOutputType = {
    id: number
    nis: number
    nama: number
    kelasId: number
    _all: number
  }


  export type SiswaAvgAggregateInputType = {
    id?: true
    nis?: true
    kelasId?: true
  }

  export type SiswaSumAggregateInputType = {
    id?: true
    nis?: true
    kelasId?: true
  }

  export type SiswaMinAggregateInputType = {
    id?: true
    nis?: true
    nama?: true
    kelasId?: true
  }

  export type SiswaMaxAggregateInputType = {
    id?: true
    nis?: true
    nama?: true
    kelasId?: true
  }

  export type SiswaCountAggregateInputType = {
    id?: true
    nis?: true
    nama?: true
    kelasId?: true
    _all?: true
  }

  export type SiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Siswa to aggregate.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Siswas
    **/
    _count?: true | SiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiswaMaxAggregateInputType
  }

  export type GetSiswaAggregateType<T extends SiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateSiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiswa[P]>
      : GetScalarType<T[P], AggregateSiswa[P]>
  }




  export type SiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiswaWhereInput
    orderBy?: SiswaOrderByWithAggregationInput | SiswaOrderByWithAggregationInput[]
    by: SiswaScalarFieldEnum[] | SiswaScalarFieldEnum
    having?: SiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiswaCountAggregateInputType | true
    _avg?: SiswaAvgAggregateInputType
    _sum?: SiswaSumAggregateInputType
    _min?: SiswaMinAggregateInputType
    _max?: SiswaMaxAggregateInputType
  }

  export type SiswaGroupByOutputType = {
    id: number
    nis: number
    nama: string
    kelasId: number
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  type GetSiswaGroupByPayload<T extends SiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiswaGroupByOutputType[P]>
            : GetScalarType<T[P], SiswaGroupByOutputType[P]>
        }
      >
    >


  export type SiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    nama?: boolean
    kelasId?: boolean
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>



  export type SiswaSelectScalar = {
    id?: boolean
    nis?: boolean
    nama?: boolean
    kelasId?: boolean
  }

  export type SiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nis" | "nama" | "kelasId", ExtArgs["result"]["siswa"]>
  export type SiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
  }

  export type $SiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Siswa"
    objects: {
      kelas: Prisma.$kelasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nis: number
      nama: string
      kelasId: number
    }, ExtArgs["result"]["siswa"]>
    composites: {}
  }

  type SiswaGetPayload<S extends boolean | null | undefined | SiswaDefaultArgs> = $Result.GetResult<Prisma.$SiswaPayload, S>

  type SiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiswaCountAggregateInputType | true
    }

  export interface SiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Siswa'], meta: { name: 'Siswa' } }
    /**
     * Find zero or one Siswa that matches the filter.
     * @param {SiswaFindUniqueArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiswaFindUniqueArgs>(args: SelectSubset<T, SiswaFindUniqueArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Siswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiswaFindUniqueOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, SiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindFirstArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiswaFindFirstArgs>(args?: SelectSubset<T, SiswaFindFirstArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindFirstOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, SiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Siswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Siswas
     * const siswas = await prisma.siswa.findMany()
     * 
     * // Get first 10 Siswas
     * const siswas = await prisma.siswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siswaWithIdOnly = await prisma.siswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiswaFindManyArgs>(args?: SelectSubset<T, SiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Siswa.
     * @param {SiswaCreateArgs} args - Arguments to create a Siswa.
     * @example
     * // Create one Siswa
     * const Siswa = await prisma.siswa.create({
     *   data: {
     *     // ... data to create a Siswa
     *   }
     * })
     * 
     */
    create<T extends SiswaCreateArgs>(args: SelectSubset<T, SiswaCreateArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Siswas.
     * @param {SiswaCreateManyArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiswaCreateManyArgs>(args?: SelectSubset<T, SiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Siswa.
     * @param {SiswaDeleteArgs} args - Arguments to delete one Siswa.
     * @example
     * // Delete one Siswa
     * const Siswa = await prisma.siswa.delete({
     *   where: {
     *     // ... filter to delete one Siswa
     *   }
     * })
     * 
     */
    delete<T extends SiswaDeleteArgs>(args: SelectSubset<T, SiswaDeleteArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Siswa.
     * @param {SiswaUpdateArgs} args - Arguments to update one Siswa.
     * @example
     * // Update one Siswa
     * const siswa = await prisma.siswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiswaUpdateArgs>(args: SelectSubset<T, SiswaUpdateArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Siswas.
     * @param {SiswaDeleteManyArgs} args - Arguments to filter Siswas to delete.
     * @example
     * // Delete a few Siswas
     * const { count } = await prisma.siswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiswaDeleteManyArgs>(args?: SelectSubset<T, SiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiswaUpdateManyArgs>(args: SelectSubset<T, SiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Siswa.
     * @param {SiswaUpsertArgs} args - Arguments to update or create a Siswa.
     * @example
     * // Update or create a Siswa
     * const siswa = await prisma.siswa.upsert({
     *   create: {
     *     // ... data to create a Siswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Siswa we want to update
     *   }
     * })
     */
    upsert<T extends SiswaUpsertArgs>(args: SelectSubset<T, SiswaUpsertArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaCountArgs} args - Arguments to filter Siswas to count.
     * @example
     * // Count the number of Siswas
     * const count = await prisma.siswa.count({
     *   where: {
     *     // ... the filter for the Siswas we want to count
     *   }
     * })
    **/
    count<T extends SiswaCountArgs>(
      args?: Subset<T, SiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiswaAggregateArgs>(args: Subset<T, SiswaAggregateArgs>): Prisma.PrismaPromise<GetSiswaAggregateType<T>>

    /**
     * Group by Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaGroupByArgs} args - Group by arguments.
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
      T extends SiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiswaGroupByArgs['orderBy'] }
        : { orderBy?: SiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Siswa model
   */
  readonly fields: SiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Siswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends kelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, kelasDefaultArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Siswa model
   */
  interface SiswaFieldRefs {
    readonly id: FieldRef<"Siswa", 'Int'>
    readonly nis: FieldRef<"Siswa", 'Int'>
    readonly nama: FieldRef<"Siswa", 'String'>
    readonly kelasId: FieldRef<"Siswa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Siswa findUnique
   */
  export type SiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa findUniqueOrThrow
   */
  export type SiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa findFirst
   */
  export type SiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa findFirstOrThrow
   */
  export type SiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa findMany
   */
  export type SiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswas to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa create
   */
  export type SiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Siswa.
     */
    data: XOR<SiswaCreateInput, SiswaUncheckedCreateInput>
  }

  /**
   * Siswa createMany
   */
  export type SiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Siswas.
     */
    data: SiswaCreateManyInput | SiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Siswa update
   */
  export type SiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Siswa.
     */
    data: XOR<SiswaUpdateInput, SiswaUncheckedUpdateInput>
    /**
     * Choose, which Siswa to update.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa updateMany
   */
  export type SiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Siswas.
     */
    data: XOR<SiswaUpdateManyMutationInput, SiswaUncheckedUpdateManyInput>
    /**
     * Filter which Siswas to update
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to update.
     */
    limit?: number
  }

  /**
   * Siswa upsert
   */
  export type SiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Siswa to update in case it exists.
     */
    where: SiswaWhereUniqueInput
    /**
     * In case the Siswa found by the `where` argument doesn't exist, create a new Siswa with this data.
     */
    create: XOR<SiswaCreateInput, SiswaUncheckedCreateInput>
    /**
     * In case the Siswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiswaUpdateInput, SiswaUncheckedUpdateInput>
  }

  /**
   * Siswa delete
   */
  export type SiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter which Siswa to delete.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa deleteMany
   */
  export type SiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Siswas to delete
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to delete.
     */
    limit?: number
  }

  /**
   * Siswa without action
   */
  export type SiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
  }


  /**
   * Model kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasAvgAggregateOutputType = {
    id: number | null
    JumlahAnggota: number | null
  }

  export type KelasSumAggregateOutputType = {
    id: number | null
    JumlahAnggota: number | null
  }

  export type KelasMinAggregateOutputType = {
    id: number | null
    namaKelas: string | null
    JumlahAnggota: number | null
  }

  export type KelasMaxAggregateOutputType = {
    id: number | null
    namaKelas: string | null
    JumlahAnggota: number | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    namaKelas: number
    JumlahAnggota: number
    _all: number
  }


  export type KelasAvgAggregateInputType = {
    id?: true
    JumlahAnggota?: true
  }

  export type KelasSumAggregateInputType = {
    id?: true
    JumlahAnggota?: true
  }

  export type KelasMinAggregateInputType = {
    id?: true
    namaKelas?: true
    JumlahAnggota?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    namaKelas?: true
    JumlahAnggota?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    namaKelas?: true
    JumlahAnggota?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelas to aggregate.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type kelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelasWhereInput
    orderBy?: kelasOrderByWithAggregationInput | kelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: kelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _avg?: KelasAvgAggregateInputType
    _sum?: KelasSumAggregateInputType
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: number
    namaKelas: string
    JumlahAnggota: number
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends kelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type kelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaKelas?: boolean
    JumlahAnggota?: boolean
    siswa?: boolean | kelas$siswaArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>



  export type kelasSelectScalar = {
    id?: boolean
    namaKelas?: boolean
    JumlahAnggota?: boolean
  }

  export type kelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaKelas" | "JumlahAnggota", ExtArgs["result"]["kelas"]>
  export type kelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | kelas$siswaArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $kelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kelas"
    objects: {
      siswa: Prisma.$SiswaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaKelas: string
      JumlahAnggota: number
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type kelasGetPayload<S extends boolean | null | undefined | kelasDefaultArgs> = $Result.GetResult<Prisma.$kelasPayload, S>

  type kelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface kelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kelas'], meta: { name: 'kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {kelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kelasFindUniqueArgs>(args: SelectSubset<T, kelasFindUniqueArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kelasFindUniqueOrThrowArgs>(args: SelectSubset<T, kelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kelasFindFirstArgs>(args?: SelectSubset<T, kelasFindFirstArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kelasFindFirstOrThrowArgs>(args?: SelectSubset<T, kelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kelasFindManyArgs>(args?: SelectSubset<T, kelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {kelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends kelasCreateArgs>(args: SelectSubset<T, kelasCreateArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {kelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kelasCreateManyArgs>(args?: SelectSubset<T, kelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kelas.
     * @param {kelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends kelasDeleteArgs>(args: SelectSubset<T, kelasDeleteArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {kelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kelasUpdateArgs>(args: SelectSubset<T, kelasUpdateArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {kelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kelasDeleteManyArgs>(args?: SelectSubset<T, kelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kelasUpdateManyArgs>(args: SelectSubset<T, kelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kelas.
     * @param {kelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends kelasUpsertArgs>(args: SelectSubset<T, kelasUpsertArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends kelasCountArgs>(
      args?: Subset<T, kelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasGroupByArgs} args - Group by arguments.
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
      T extends kelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kelasGroupByArgs['orderBy'] }
        : { orderBy?: kelasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kelas model
   */
  readonly fields: kelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siswa<T extends kelas$siswaArgs<ExtArgs> = {}>(args?: Subset<T, kelas$siswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the kelas model
   */
  interface kelasFieldRefs {
    readonly id: FieldRef<"kelas", 'Int'>
    readonly namaKelas: FieldRef<"kelas", 'String'>
    readonly JumlahAnggota: FieldRef<"kelas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * kelas findUnique
   */
  export type kelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas findUniqueOrThrow
   */
  export type kelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas findFirst
   */
  export type kelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas findFirstOrThrow
   */
  export type kelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas findMany
   */
  export type kelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas create
   */
  export type kelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The data needed to create a kelas.
     */
    data: XOR<kelasCreateInput, kelasUncheckedCreateInput>
  }

  /**
   * kelas createMany
   */
  export type kelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kelas.
     */
    data: kelasCreateManyInput | kelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kelas update
   */
  export type kelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The data needed to update a kelas.
     */
    data: XOR<kelasUpdateInput, kelasUncheckedUpdateInput>
    /**
     * Choose, which kelas to update.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas updateMany
   */
  export type kelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kelas.
     */
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyInput>
    /**
     * Filter which kelas to update
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to update.
     */
    limit?: number
  }

  /**
   * kelas upsert
   */
  export type kelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The filter to search for the kelas to update in case it exists.
     */
    where: kelasWhereUniqueInput
    /**
     * In case the kelas found by the `where` argument doesn't exist, create a new kelas with this data.
     */
    create: XOR<kelasCreateInput, kelasUncheckedCreateInput>
    /**
     * In case the kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kelasUpdateInput, kelasUncheckedUpdateInput>
  }

  /**
   * kelas delete
   */
  export type kelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter which kelas to delete.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas deleteMany
   */
  export type kelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelas to delete
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to delete.
     */
    limit?: number
  }

  /**
   * kelas.siswa
   */
  export type kelas$siswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    where?: SiswaWhereInput
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    cursor?: SiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * kelas without action
   */
  export type kelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    no_hp: 'no_hp',
    alamat: 'alamat',
    role: 'role',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kategoriId: 'kategoriId',
    harga: 'harga',
    stok: 'stok',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    status: 'status',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    nama_konter: 'nama_konter',
    total_harga: 'total_harga',
    diskon: 'diskon',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const DetailTransaksiScalarFieldEnum: {
    id: 'id',
    id_transaksi: 'id_transaksi',
    id_product: 'id_product',
    qty: 'qty',
    harga_satuan: 'harga_satuan',
    subtotal: 'subtotal'
  };

  export type DetailTransaksiScalarFieldEnum = (typeof DetailTransaksiScalarFieldEnum)[keyof typeof DetailTransaksiScalarFieldEnum]


  export const SiswaScalarFieldEnum: {
    id: 'id',
    nis: 'nis',
    nama: 'nama',
    kelasId: 'kelasId'
  };

  export type SiswaScalarFieldEnum = (typeof SiswaScalarFieldEnum)[keyof typeof SiswaScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    namaKelas: 'namaKelas',
    JumlahAnggota: 'JumlahAnggota'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nama: 'nama',
    email: 'email',
    password: 'password',
    no_hp: 'no_hp',
    alamat: 'alamat',
    role: 'role',
    status: 'status'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const KategoriOrderByRelevanceFieldEnum: {
    nama: 'nama',
    status: 'status'
  };

  export type KategoriOrderByRelevanceFieldEnum = (typeof KategoriOrderByRelevanceFieldEnum)[keyof typeof KategoriOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    nama: 'nama',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    status: 'status'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const TransaksiOrderByRelevanceFieldEnum: {
    nama_konter: 'nama_konter',
    status: 'status'
  };

  export type TransaksiOrderByRelevanceFieldEnum = (typeof TransaksiOrderByRelevanceFieldEnum)[keyof typeof TransaksiOrderByRelevanceFieldEnum]


  export const SiswaOrderByRelevanceFieldEnum: {
    nama: 'nama'
  };

  export type SiswaOrderByRelevanceFieldEnum = (typeof SiswaOrderByRelevanceFieldEnum)[keyof typeof SiswaOrderByRelevanceFieldEnum]


  export const kelasOrderByRelevanceFieldEnum: {
    namaKelas: 'namaKelas'
  };

  export type kelasOrderByRelevanceFieldEnum = (typeof kelasOrderByRelevanceFieldEnum)[keyof typeof kelasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    no_hp?: StringNullableFilter<"User"> | string | null
    alamat?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    transaksi?: TransaksiListRelationFilter
    produk?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    transaksi?: TransaksiOrderByRelationAggregateInput
    produk?: ProductOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    no_hp?: StringNullableFilter<"User"> | string | null
    alamat?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    transaksi?: TransaksiListRelationFilter
    produk?: ProductListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    no_hp?: StringNullableWithAggregatesFilter<"User"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: IntFilter<"Kategori"> | number
    nama?: StringFilter<"Kategori"> | string
    status?: StringNullableFilter<"Kategori"> | string | null
    created_at?: DateTimeNullableFilter<"Kategori"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Kategori"> | Date | string | null
    produk?: ProductListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    produk?: ProductOrderByRelationAggregateInput
    _relevance?: KategoriOrderByRelevanceInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    nama?: StringFilter<"Kategori"> | string
    status?: StringNullableFilter<"Kategori"> | string | null
    created_at?: DateTimeNullableFilter<"Kategori"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Kategori"> | Date | string | null
    produk?: ProductListRelationFilter
  }, "id">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kategori"> | number
    nama?: StringWithAggregatesFilter<"Kategori"> | string
    status?: StringNullableWithAggregatesFilter<"Kategori"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Kategori"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Kategori"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    nama?: StringFilter<"Product"> | string
    kategoriId?: IntFilter<"Product"> | number
    harga?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stok?: IntFilter<"Product"> | number
    deskripsi?: StringNullableFilter<"Product"> | string | null
    gambar?: StringNullableFilter<"Product"> | string | null
    status?: StringNullableFilter<"Product"> | string | null
    userId?: IntNullableFilter<"Product"> | number | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    detailTransaksi?: DetailTransaksiListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    kategori?: KategoriOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    detailTransaksi?: DetailTransaksiOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    nama?: StringFilter<"Product"> | string
    kategoriId?: IntFilter<"Product"> | number
    harga?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stok?: IntFilter<"Product"> | number
    deskripsi?: StringNullableFilter<"Product"> | string | null
    gambar?: StringNullableFilter<"Product"> | string | null
    status?: StringNullableFilter<"Product"> | string | null
    userId?: IntNullableFilter<"Product"> | number | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    detailTransaksi?: DetailTransaksiListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    nama?: StringWithAggregatesFilter<"Product"> | string
    kategoriId?: IntWithAggregatesFilter<"Product"> | number
    harga?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stok?: IntWithAggregatesFilter<"Product"> | number
    deskripsi?: StringNullableWithAggregatesFilter<"Product"> | string | null
    gambar?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: StringNullableWithAggregatesFilter<"Product"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type TransaksiWhereInput = {
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id?: IntFilter<"Transaksi"> | number
    id_user?: IntFilter<"Transaksi"> | number
    nama_konter?: StringNullableFilter<"Transaksi"> | string | null
    total_harga?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    diskon?: DecimalNullableFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Transaksi"> | string | null
    created_at?: DateTimeNullableFilter<"Transaksi"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transaksi"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    detailTransaksi?: DetailTransaksiListRelationFilter
  }

  export type TransaksiOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    nama_konter?: SortOrderInput | SortOrder
    total_harga?: SortOrder
    diskon?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    detailTransaksi?: DetailTransaksiOrderByRelationAggregateInput
    _relevance?: TransaksiOrderByRelevanceInput
  }

  export type TransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id_user?: IntFilter<"Transaksi"> | number
    nama_konter?: StringNullableFilter<"Transaksi"> | string | null
    total_harga?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    diskon?: DecimalNullableFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Transaksi"> | string | null
    created_at?: DateTimeNullableFilter<"Transaksi"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transaksi"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    detailTransaksi?: DetailTransaksiListRelationFilter
  }, "id">

  export type TransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    nama_konter?: SortOrderInput | SortOrder
    total_harga?: SortOrder
    diskon?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TransaksiCountOrderByAggregateInput
    _avg?: TransaksiAvgOrderByAggregateInput
    _max?: TransaksiMaxOrderByAggregateInput
    _min?: TransaksiMinOrderByAggregateInput
    _sum?: TransaksiSumOrderByAggregateInput
  }

  export type TransaksiScalarWhereWithAggregatesInput = {
    AND?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    OR?: TransaksiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaksi"> | number
    id_user?: IntWithAggregatesFilter<"Transaksi"> | number
    nama_konter?: StringNullableWithAggregatesFilter<"Transaksi"> | string | null
    total_harga?: DecimalWithAggregatesFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    diskon?: DecimalNullableWithAggregatesFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"Transaksi"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Transaksi"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Transaksi"> | Date | string | null
  }

  export type DetailTransaksiWhereInput = {
    AND?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    OR?: DetailTransaksiWhereInput[]
    NOT?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    id?: IntFilter<"DetailTransaksi"> | number
    id_transaksi?: IntFilter<"DetailTransaksi"> | number
    id_product?: IntFilter<"DetailTransaksi"> | number
    qty?: IntFilter<"DetailTransaksi"> | number
    harga_satuan?: DecimalFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
    transaksi?: XOR<TransaksiScalarRelationFilter, TransaksiWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DetailTransaksiOrderByWithRelationInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
    transaksi?: TransaksiOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DetailTransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    OR?: DetailTransaksiWhereInput[]
    NOT?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    id_transaksi?: IntFilter<"DetailTransaksi"> | number
    id_product?: IntFilter<"DetailTransaksi"> | number
    qty?: IntFilter<"DetailTransaksi"> | number
    harga_satuan?: DecimalFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
    transaksi?: XOR<TransaksiScalarRelationFilter, TransaksiWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type DetailTransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
    _count?: DetailTransaksiCountOrderByAggregateInput
    _avg?: DetailTransaksiAvgOrderByAggregateInput
    _max?: DetailTransaksiMaxOrderByAggregateInput
    _min?: DetailTransaksiMinOrderByAggregateInput
    _sum?: DetailTransaksiSumOrderByAggregateInput
  }

  export type DetailTransaksiScalarWhereWithAggregatesInput = {
    AND?: DetailTransaksiScalarWhereWithAggregatesInput | DetailTransaksiScalarWhereWithAggregatesInput[]
    OR?: DetailTransaksiScalarWhereWithAggregatesInput[]
    NOT?: DetailTransaksiScalarWhereWithAggregatesInput | DetailTransaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    id_transaksi?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    id_product?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    qty?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    harga_satuan?: DecimalWithAggregatesFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
  }

  export type SiswaWhereInput = {
    AND?: SiswaWhereInput | SiswaWhereInput[]
    OR?: SiswaWhereInput[]
    NOT?: SiswaWhereInput | SiswaWhereInput[]
    id?: IntFilter<"Siswa"> | number
    nis?: IntFilter<"Siswa"> | number
    nama?: StringFilter<"Siswa"> | string
    kelasId?: IntFilter<"Siswa"> | number
    kelas?: XOR<KelasScalarRelationFilter, kelasWhereInput>
  }

  export type SiswaOrderByWithRelationInput = {
    id?: SortOrder
    nis?: SortOrder
    nama?: SortOrder
    kelasId?: SortOrder
    kelas?: kelasOrderByWithRelationInput
    _relevance?: SiswaOrderByRelevanceInput
  }

  export type SiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiswaWhereInput | SiswaWhereInput[]
    OR?: SiswaWhereInput[]
    NOT?: SiswaWhereInput | SiswaWhereInput[]
    nis?: IntFilter<"Siswa"> | number
    nama?: StringFilter<"Siswa"> | string
    kelasId?: IntFilter<"Siswa"> | number
    kelas?: XOR<KelasScalarRelationFilter, kelasWhereInput>
  }, "id">

  export type SiswaOrderByWithAggregationInput = {
    id?: SortOrder
    nis?: SortOrder
    nama?: SortOrder
    kelasId?: SortOrder
    _count?: SiswaCountOrderByAggregateInput
    _avg?: SiswaAvgOrderByAggregateInput
    _max?: SiswaMaxOrderByAggregateInput
    _min?: SiswaMinOrderByAggregateInput
    _sum?: SiswaSumOrderByAggregateInput
  }

  export type SiswaScalarWhereWithAggregatesInput = {
    AND?: SiswaScalarWhereWithAggregatesInput | SiswaScalarWhereWithAggregatesInput[]
    OR?: SiswaScalarWhereWithAggregatesInput[]
    NOT?: SiswaScalarWhereWithAggregatesInput | SiswaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Siswa"> | number
    nis?: IntWithAggregatesFilter<"Siswa"> | number
    nama?: StringWithAggregatesFilter<"Siswa"> | string
    kelasId?: IntWithAggregatesFilter<"Siswa"> | number
  }

  export type kelasWhereInput = {
    AND?: kelasWhereInput | kelasWhereInput[]
    OR?: kelasWhereInput[]
    NOT?: kelasWhereInput | kelasWhereInput[]
    id?: IntFilter<"kelas"> | number
    namaKelas?: StringFilter<"kelas"> | string
    JumlahAnggota?: IntFilter<"kelas"> | number
    siswa?: SiswaListRelationFilter
  }

  export type kelasOrderByWithRelationInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    JumlahAnggota?: SortOrder
    siswa?: SiswaOrderByRelationAggregateInput
    _relevance?: kelasOrderByRelevanceInput
  }

  export type kelasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: kelasWhereInput | kelasWhereInput[]
    OR?: kelasWhereInput[]
    NOT?: kelasWhereInput | kelasWhereInput[]
    namaKelas?: StringFilter<"kelas"> | string
    JumlahAnggota?: IntFilter<"kelas"> | number
    siswa?: SiswaListRelationFilter
  }, "id">

  export type kelasOrderByWithAggregationInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    JumlahAnggota?: SortOrder
    _count?: kelasCountOrderByAggregateInput
    _avg?: kelasAvgOrderByAggregateInput
    _max?: kelasMaxOrderByAggregateInput
    _min?: kelasMinOrderByAggregateInput
    _sum?: kelasSumOrderByAggregateInput
  }

  export type kelasScalarWhereWithAggregatesInput = {
    AND?: kelasScalarWhereWithAggregatesInput | kelasScalarWhereWithAggregatesInput[]
    OR?: kelasScalarWhereWithAggregatesInput[]
    NOT?: kelasScalarWhereWithAggregatesInput | kelasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kelas"> | number
    namaKelas?: StringWithAggregatesFilter<"kelas"> | string
    JumlahAnggota?: IntWithAggregatesFilter<"kelas"> | number
  }

  export type UserCreateInput = {
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    transaksi?: TransaksiCreateNestedManyWithoutUserInput
    produk?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutUserInput
    produk?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaksi?: TransaksiUpdateManyWithoutUserNestedInput
    produk?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaksi?: TransaksiUncheckedUpdateManyWithoutUserNestedInput
    produk?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KategoriCreateInput = {
    nama: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    produk?: ProductCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: number
    nama: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    produk?: ProductUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produk?: ProductUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produk?: ProductUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: number
    nama: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type KategoriUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    nama: string
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    user?: UserCreateNestedOneWithoutProdukInput
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    nama: string
    kategoriId: number
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    userId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    user?: UserUpdateOneWithoutProdukNestedInput
    detailTransaksi?: DetailTransaksiUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    nama: string
    kategoriId: number
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    userId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransaksiCreateInput = {
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutTransaksiInput
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateInput = {
    id?: number
    id_user: number
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUpdateInput = {
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTransaksiNestedInput
    detailTransaksi?: DetailTransaksiUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiCreateManyInput = {
    id?: number
    id_user: number
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransaksiUpdateManyMutationInput = {
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DetailTransaksiCreateInput = {
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    transaksi: TransaksiCreateNestedOneWithoutDetailTransaksiInput
    product: ProductCreateNestedOneWithoutDetailTransaksiInput
  }

  export type DetailTransaksiUncheckedCreateInput = {
    id?: number
    id_transaksi: number
    id_product: number
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiUpdateOneRequiredWithoutDetailTransaksiNestedInput
    product?: ProductUpdateOneRequiredWithoutDetailTransaksiNestedInput
  }

  export type DetailTransaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiCreateManyInput = {
    id?: number
    id_transaksi: number
    id_product: number
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SiswaCreateInput = {
    nis: number
    nama: string
    kelas: kelasCreateNestedOneWithoutSiswaInput
  }

  export type SiswaUncheckedCreateInput = {
    id?: number
    nis: number
    nama: string
    kelasId: number
  }

  export type SiswaUpdateInput = {
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelas?: kelasUpdateOneRequiredWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelasId?: IntFieldUpdateOperationsInput | number
  }

  export type SiswaCreateManyInput = {
    id?: number
    nis: number
    nama: string
    kelasId: number
  }

  export type SiswaUpdateManyMutationInput = {
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelasId?: IntFieldUpdateOperationsInput | number
  }

  export type kelasCreateInput = {
    namaKelas: string
    JumlahAnggota: number
    siswa?: SiswaCreateNestedManyWithoutKelasInput
  }

  export type kelasUncheckedCreateInput = {
    id?: number
    namaKelas: string
    JumlahAnggota: number
    siswa?: SiswaUncheckedCreateNestedManyWithoutKelasInput
  }

  export type kelasUpdateInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    JumlahAnggota?: IntFieldUpdateOperationsInput | number
    siswa?: SiswaUpdateManyWithoutKelasNestedInput
  }

  export type kelasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    JumlahAnggota?: IntFieldUpdateOperationsInput | number
    siswa?: SiswaUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type kelasCreateManyInput = {
    id?: number
    namaKelas: string
    JumlahAnggota: number
  }

  export type kelasUpdateManyMutationInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    JumlahAnggota?: IntFieldUpdateOperationsInput | number
  }

  export type kelasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    JumlahAnggota?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TransaksiListRelationFilter = {
    every?: TransaksiWhereInput
    some?: TransaksiWhereInput
    none?: TransaksiWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type KategoriOrderByRelevanceInput = {
    fields: KategoriOrderByRelevanceFieldEnum | KategoriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DetailTransaksiListRelationFilter = {
    every?: DetailTransaksiWhereInput
    some?: DetailTransaksiWhereInput
    none?: DetailTransaksiWhereInput
  }

  export type DetailTransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    userId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    userId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransaksiOrderByRelevanceInput = {
    fields: TransaksiOrderByRelevanceFieldEnum | TransaksiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    nama_konter?: SortOrder
    total_harga?: SortOrder
    diskon?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    total_harga?: SortOrder
    diskon?: SortOrder
  }

  export type TransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    nama_konter?: SortOrder
    total_harga?: SortOrder
    diskon?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    nama_konter?: SortOrder
    total_harga?: SortOrder
    diskon?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransaksiSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    total_harga?: SortOrder
    diskon?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TransaksiScalarRelationFilter = {
    is?: TransaksiWhereInput
    isNot?: TransaksiWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DetailTransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiSumOrderByAggregateInput = {
    id?: SortOrder
    id_transaksi?: SortOrder
    id_product?: SortOrder
    qty?: SortOrder
    harga_satuan?: SortOrder
    subtotal?: SortOrder
  }

  export type KelasScalarRelationFilter = {
    is?: kelasWhereInput
    isNot?: kelasWhereInput
  }

  export type SiswaOrderByRelevanceInput = {
    fields: SiswaOrderByRelevanceFieldEnum | SiswaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SiswaCountOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    nama?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaAvgOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    nama?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaMinOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    nama?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaSumOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaListRelationFilter = {
    every?: SiswaWhereInput
    some?: SiswaWhereInput
    none?: SiswaWhereInput
  }

  export type SiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kelasOrderByRelevanceInput = {
    fields: kelasOrderByRelevanceFieldEnum | kelasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kelasCountOrderByAggregateInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    JumlahAnggota?: SortOrder
  }

  export type kelasAvgOrderByAggregateInput = {
    id?: SortOrder
    JumlahAnggota?: SortOrder
  }

  export type kelasMaxOrderByAggregateInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    JumlahAnggota?: SortOrder
  }

  export type kelasMinOrderByAggregateInput = {
    id?: SortOrder
    namaKelas?: SortOrder
    JumlahAnggota?: SortOrder
  }

  export type kelasSumOrderByAggregateInput = {
    id?: SortOrder
    JumlahAnggota?: SortOrder
  }

  export type TransaksiCreateNestedManyWithoutUserInput = {
    create?: XOR<TransaksiCreateWithoutUserInput, TransaksiUncheckedCreateWithoutUserInput> | TransaksiCreateWithoutUserInput[] | TransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutUserInput | TransaksiCreateOrConnectWithoutUserInput[]
    createMany?: TransaksiCreateManyUserInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransaksiCreateWithoutUserInput, TransaksiUncheckedCreateWithoutUserInput> | TransaksiCreateWithoutUserInput[] | TransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutUserInput | TransaksiCreateOrConnectWithoutUserInput[]
    createMany?: TransaksiCreateManyUserInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TransaksiUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransaksiCreateWithoutUserInput, TransaksiUncheckedCreateWithoutUserInput> | TransaksiCreateWithoutUserInput[] | TransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutUserInput | TransaksiCreateOrConnectWithoutUserInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutUserInput | TransaksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransaksiCreateManyUserInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutUserInput | TransaksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutUserInput | TransaksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransaksiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransaksiCreateWithoutUserInput, TransaksiUncheckedCreateWithoutUserInput> | TransaksiCreateWithoutUserInput[] | TransaksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutUserInput | TransaksiCreateOrConnectWithoutUserInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutUserInput | TransaksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransaksiCreateManyUserInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutUserInput | TransaksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutUserInput | TransaksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutKategoriInput = {
    create?: XOR<ProductCreateWithoutKategoriInput, ProductUncheckedCreateWithoutKategoriInput> | ProductCreateWithoutKategoriInput[] | ProductUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoriInput | ProductCreateOrConnectWithoutKategoriInput[]
    createMany?: ProductCreateManyKategoriInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<ProductCreateWithoutKategoriInput, ProductUncheckedCreateWithoutKategoriInput> | ProductCreateWithoutKategoriInput[] | ProductUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoriInput | ProductCreateOrConnectWithoutKategoriInput[]
    createMany?: ProductCreateManyKategoriInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<ProductCreateWithoutKategoriInput, ProductUncheckedCreateWithoutKategoriInput> | ProductCreateWithoutKategoriInput[] | ProductUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoriInput | ProductCreateOrConnectWithoutKategoriInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutKategoriInput | ProductUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: ProductCreateManyKategoriInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutKategoriInput | ProductUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutKategoriInput | ProductUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<ProductCreateWithoutKategoriInput, ProductUncheckedCreateWithoutKategoriInput> | ProductCreateWithoutKategoriInput[] | ProductUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoriInput | ProductCreateOrConnectWithoutKategoriInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutKategoriInput | ProductUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: ProductCreateManyKategoriInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutKategoriInput | ProductUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutKategoriInput | ProductUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutProdukInput = {
    create?: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutProdukInput
    connect?: KategoriWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProdukInput = {
    create?: XOR<UserCreateWithoutProdukInput, UserUncheckedCreateWithoutProdukInput>
    connectOrCreate?: UserCreateOrConnectWithoutProdukInput
    connect?: UserWhereUniqueInput
  }

  export type DetailTransaksiCreateNestedManyWithoutProductInput = {
    create?: XOR<DetailTransaksiCreateWithoutProductInput, DetailTransaksiUncheckedCreateWithoutProductInput> | DetailTransaksiCreateWithoutProductInput[] | DetailTransaksiUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutProductInput | DetailTransaksiCreateOrConnectWithoutProductInput[]
    createMany?: DetailTransaksiCreateManyProductInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DetailTransaksiUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DetailTransaksiCreateWithoutProductInput, DetailTransaksiUncheckedCreateWithoutProductInput> | DetailTransaksiCreateWithoutProductInput[] | DetailTransaksiUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutProductInput | DetailTransaksiCreateOrConnectWithoutProductInput[]
    createMany?: DetailTransaksiCreateManyProductInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type KategoriUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutProdukInput
    upsert?: KategoriUpsertWithoutProdukInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutProdukInput, KategoriUpdateWithoutProdukInput>, KategoriUncheckedUpdateWithoutProdukInput>
  }

  export type UserUpdateOneWithoutProdukNestedInput = {
    create?: XOR<UserCreateWithoutProdukInput, UserUncheckedCreateWithoutProdukInput>
    connectOrCreate?: UserCreateOrConnectWithoutProdukInput
    upsert?: UserUpsertWithoutProdukInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProdukInput, UserUpdateWithoutProdukInput>, UserUncheckedUpdateWithoutProdukInput>
  }

  export type DetailTransaksiUpdateManyWithoutProductNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutProductInput, DetailTransaksiUncheckedCreateWithoutProductInput> | DetailTransaksiCreateWithoutProductInput[] | DetailTransaksiUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutProductInput | DetailTransaksiCreateOrConnectWithoutProductInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutProductInput | DetailTransaksiUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DetailTransaksiCreateManyProductInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutProductInput | DetailTransaksiUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutProductInput | DetailTransaksiUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutProductInput, DetailTransaksiUncheckedCreateWithoutProductInput> | DetailTransaksiCreateWithoutProductInput[] | DetailTransaksiUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutProductInput | DetailTransaksiCreateOrConnectWithoutProductInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutProductInput | DetailTransaksiUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DetailTransaksiCreateManyProductInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutProductInput | DetailTransaksiUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutProductInput | DetailTransaksiUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<UserCreateWithoutTransaksiInput, UserUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransaksiInput
    connect?: UserWhereUniqueInput
  }

  export type DetailTransaksiCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DetailTransaksiUncheckedCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<UserCreateWithoutTransaksiInput, UserUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransaksiInput
    upsert?: UserUpsertWithoutTransaksiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransaksiInput, UserUpdateWithoutTransaksiInput>, UserUncheckedUpdateWithoutTransaksiInput>
  }

  export type DetailTransaksiUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput | DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput | DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type TransaksiCreateNestedOneWithoutDetailTransaksiInput = {
    create?: XOR<TransaksiCreateWithoutDetailTransaksiInput, TransaksiUncheckedCreateWithoutDetailTransaksiInput>
    connectOrCreate?: TransaksiCreateOrConnectWithoutDetailTransaksiInput
    connect?: TransaksiWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDetailTransaksiInput = {
    create?: XOR<ProductCreateWithoutDetailTransaksiInput, ProductUncheckedCreateWithoutDetailTransaksiInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDetailTransaksiInput
    connect?: ProductWhereUniqueInput
  }

  export type TransaksiUpdateOneRequiredWithoutDetailTransaksiNestedInput = {
    create?: XOR<TransaksiCreateWithoutDetailTransaksiInput, TransaksiUncheckedCreateWithoutDetailTransaksiInput>
    connectOrCreate?: TransaksiCreateOrConnectWithoutDetailTransaksiInput
    upsert?: TransaksiUpsertWithoutDetailTransaksiInput
    connect?: TransaksiWhereUniqueInput
    update?: XOR<XOR<TransaksiUpdateToOneWithWhereWithoutDetailTransaksiInput, TransaksiUpdateWithoutDetailTransaksiInput>, TransaksiUncheckedUpdateWithoutDetailTransaksiInput>
  }

  export type ProductUpdateOneRequiredWithoutDetailTransaksiNestedInput = {
    create?: XOR<ProductCreateWithoutDetailTransaksiInput, ProductUncheckedCreateWithoutDetailTransaksiInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDetailTransaksiInput
    upsert?: ProductUpsertWithoutDetailTransaksiInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDetailTransaksiInput, ProductUpdateWithoutDetailTransaksiInput>, ProductUncheckedUpdateWithoutDetailTransaksiInput>
  }

  export type kelasCreateNestedOneWithoutSiswaInput = {
    create?: XOR<kelasCreateWithoutSiswaInput, kelasUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: kelasCreateOrConnectWithoutSiswaInput
    connect?: kelasWhereUniqueInput
  }

  export type kelasUpdateOneRequiredWithoutSiswaNestedInput = {
    create?: XOR<kelasCreateWithoutSiswaInput, kelasUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: kelasCreateOrConnectWithoutSiswaInput
    upsert?: kelasUpsertWithoutSiswaInput
    connect?: kelasWhereUniqueInput
    update?: XOR<XOR<kelasUpdateToOneWithWhereWithoutSiswaInput, kelasUpdateWithoutSiswaInput>, kelasUncheckedUpdateWithoutSiswaInput>
  }

  export type SiswaCreateNestedManyWithoutKelasInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
  }

  export type SiswaUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
  }

  export type SiswaUpdateManyWithoutKelasNestedInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    upsert?: SiswaUpsertWithWhereUniqueWithoutKelasInput | SiswaUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    set?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    disconnect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    delete?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    update?: SiswaUpdateWithWhereUniqueWithoutKelasInput | SiswaUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: SiswaUpdateManyWithWhereWithoutKelasInput | SiswaUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
  }

  export type SiswaUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    upsert?: SiswaUpsertWithWhereUniqueWithoutKelasInput | SiswaUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    set?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    disconnect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    delete?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    update?: SiswaUpdateWithWhereUniqueWithoutKelasInput | SiswaUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: SiswaUpdateManyWithWhereWithoutKelasInput | SiswaUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TransaksiCreateWithoutUserInput = {
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutUserInput = {
    id?: number
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiCreateOrConnectWithoutUserInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutUserInput, TransaksiUncheckedCreateWithoutUserInput>
  }

  export type TransaksiCreateManyUserInputEnvelope = {
    data: TransaksiCreateManyUserInput | TransaksiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    nama: string
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: number
    nama: string
    kategoriId: number
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiUpsertWithWhereUniqueWithoutUserInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutUserInput, TransaksiUncheckedUpdateWithoutUserInput>
    create: XOR<TransaksiCreateWithoutUserInput, TransaksiUncheckedCreateWithoutUserInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutUserInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutUserInput, TransaksiUncheckedUpdateWithoutUserInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutUserInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutUserInput>
  }

  export type TransaksiScalarWhereInput = {
    AND?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    OR?: TransaksiScalarWhereInput[]
    NOT?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    id?: IntFilter<"Transaksi"> | number
    id_user?: IntFilter<"Transaksi"> | number
    nama_konter?: StringNullableFilter<"Transaksi"> | string | null
    total_harga?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    diskon?: DecimalNullableFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Transaksi"> | string | null
    created_at?: DateTimeNullableFilter<"Transaksi"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transaksi"> | Date | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    nama?: StringFilter<"Product"> | string
    kategoriId?: IntFilter<"Product"> | number
    harga?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stok?: IntFilter<"Product"> | number
    deskripsi?: StringNullableFilter<"Product"> | string | null
    gambar?: StringNullableFilter<"Product"> | string | null
    status?: StringNullableFilter<"Product"> | string | null
    userId?: IntNullableFilter<"Product"> | number | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type ProductCreateWithoutKategoriInput = {
    nama: string
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: UserCreateNestedOneWithoutProdukInput
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutKategoriInput = {
    id?: number
    nama: string
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    userId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutKategoriInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutKategoriInput, ProductUncheckedCreateWithoutKategoriInput>
  }

  export type ProductCreateManyKategoriInputEnvelope = {
    data: ProductCreateManyKategoriInput | ProductCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutKategoriInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutKategoriInput, ProductUncheckedUpdateWithoutKategoriInput>
    create: XOR<ProductCreateWithoutKategoriInput, ProductUncheckedCreateWithoutKategoriInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutKategoriInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutKategoriInput, ProductUncheckedUpdateWithoutKategoriInput>
  }

  export type ProductUpdateManyWithWhereWithoutKategoriInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutKategoriInput>
  }

  export type KategoriCreateWithoutProdukInput = {
    nama: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type KategoriUncheckedCreateWithoutProdukInput = {
    id?: number
    nama: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type KategoriCreateOrConnectWithoutProdukInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
  }

  export type UserCreateWithoutProdukInput = {
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    transaksi?: TransaksiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProdukInput = {
    id?: number
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProdukInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProdukInput, UserUncheckedCreateWithoutProdukInput>
  }

  export type DetailTransaksiCreateWithoutProductInput = {
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    transaksi: TransaksiCreateNestedOneWithoutDetailTransaksiInput
  }

  export type DetailTransaksiUncheckedCreateWithoutProductInput = {
    id?: number
    id_transaksi: number
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiCreateOrConnectWithoutProductInput = {
    where: DetailTransaksiWhereUniqueInput
    create: XOR<DetailTransaksiCreateWithoutProductInput, DetailTransaksiUncheckedCreateWithoutProductInput>
  }

  export type DetailTransaksiCreateManyProductInputEnvelope = {
    data: DetailTransaksiCreateManyProductInput | DetailTransaksiCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type KategoriUpsertWithoutProdukInput = {
    update: XOR<KategoriUpdateWithoutProdukInput, KategoriUncheckedUpdateWithoutProdukInput>
    create: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutProdukInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutProdukInput, KategoriUncheckedUpdateWithoutProdukInput>
  }

  export type KategoriUpdateWithoutProdukInput = {
    nama?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KategoriUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutProdukInput = {
    update: XOR<UserUpdateWithoutProdukInput, UserUncheckedUpdateWithoutProdukInput>
    create: XOR<UserCreateWithoutProdukInput, UserUncheckedCreateWithoutProdukInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProdukInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProdukInput, UserUncheckedUpdateWithoutProdukInput>
  }

  export type UserUpdateWithoutProdukInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaksi?: TransaksiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaksi?: TransaksiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DetailTransaksiUpsertWithWhereUniqueWithoutProductInput = {
    where: DetailTransaksiWhereUniqueInput
    update: XOR<DetailTransaksiUpdateWithoutProductInput, DetailTransaksiUncheckedUpdateWithoutProductInput>
    create: XOR<DetailTransaksiCreateWithoutProductInput, DetailTransaksiUncheckedCreateWithoutProductInput>
  }

  export type DetailTransaksiUpdateWithWhereUniqueWithoutProductInput = {
    where: DetailTransaksiWhereUniqueInput
    data: XOR<DetailTransaksiUpdateWithoutProductInput, DetailTransaksiUncheckedUpdateWithoutProductInput>
  }

  export type DetailTransaksiUpdateManyWithWhereWithoutProductInput = {
    where: DetailTransaksiScalarWhereInput
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyWithoutProductInput>
  }

  export type DetailTransaksiScalarWhereInput = {
    AND?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
    OR?: DetailTransaksiScalarWhereInput[]
    NOT?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
    id?: IntFilter<"DetailTransaksi"> | number
    id_transaksi?: IntFilter<"DetailTransaksi"> | number
    id_product?: IntFilter<"DetailTransaksi"> | number
    qty?: IntFilter<"DetailTransaksi"> | number
    harga_satuan?: DecimalFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"DetailTransaksi"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutTransaksiInput = {
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    produk?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransaksiInput = {
    id?: number
    nama: string
    email: string
    password: string
    no_hp?: string | null
    alamat?: string | null
    role: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    produk?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransaksiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransaksiInput, UserUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailTransaksiCreateWithoutTransaksiInput = {
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutDetailTransaksiInput
  }

  export type DetailTransaksiUncheckedCreateWithoutTransaksiInput = {
    id?: number
    id_product: number
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiCreateOrConnectWithoutTransaksiInput = {
    where: DetailTransaksiWhereUniqueInput
    create: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailTransaksiCreateManyTransaksiInputEnvelope = {
    data: DetailTransaksiCreateManyTransaksiInput | DetailTransaksiCreateManyTransaksiInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTransaksiInput = {
    update: XOR<UserUpdateWithoutTransaksiInput, UserUncheckedUpdateWithoutTransaksiInput>
    create: XOR<UserCreateWithoutTransaksiInput, UserUncheckedCreateWithoutTransaksiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransaksiInput, UserUncheckedUpdateWithoutTransaksiInput>
  }

  export type UserUpdateWithoutTransaksiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produk?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produk?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput = {
    where: DetailTransaksiWhereUniqueInput
    update: XOR<DetailTransaksiUpdateWithoutTransaksiInput, DetailTransaksiUncheckedUpdateWithoutTransaksiInput>
    create: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput = {
    where: DetailTransaksiWhereUniqueInput
    data: XOR<DetailTransaksiUpdateWithoutTransaksiInput, DetailTransaksiUncheckedUpdateWithoutTransaksiInput>
  }

  export type DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput = {
    where: DetailTransaksiScalarWhereInput
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyWithoutTransaksiInput>
  }

  export type TransaksiCreateWithoutDetailTransaksiInput = {
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutDetailTransaksiInput = {
    id?: number
    id_user: number
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransaksiCreateOrConnectWithoutDetailTransaksiInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutDetailTransaksiInput, TransaksiUncheckedCreateWithoutDetailTransaksiInput>
  }

  export type ProductCreateWithoutDetailTransaksiInput = {
    nama: string
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    user?: UserCreateNestedOneWithoutProdukInput
  }

  export type ProductUncheckedCreateWithoutDetailTransaksiInput = {
    id?: number
    nama: string
    kategoriId: number
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    userId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCreateOrConnectWithoutDetailTransaksiInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDetailTransaksiInput, ProductUncheckedCreateWithoutDetailTransaksiInput>
  }

  export type TransaksiUpsertWithoutDetailTransaksiInput = {
    update: XOR<TransaksiUpdateWithoutDetailTransaksiInput, TransaksiUncheckedUpdateWithoutDetailTransaksiInput>
    create: XOR<TransaksiCreateWithoutDetailTransaksiInput, TransaksiUncheckedCreateWithoutDetailTransaksiInput>
    where?: TransaksiWhereInput
  }

  export type TransaksiUpdateToOneWithWhereWithoutDetailTransaksiInput = {
    where?: TransaksiWhereInput
    data: XOR<TransaksiUpdateWithoutDetailTransaksiInput, TransaksiUncheckedUpdateWithoutDetailTransaksiInput>
  }

  export type TransaksiUpdateWithoutDetailTransaksiInput = {
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutDetailTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutDetailTransaksiInput = {
    update: XOR<ProductUpdateWithoutDetailTransaksiInput, ProductUncheckedUpdateWithoutDetailTransaksiInput>
    create: XOR<ProductCreateWithoutDetailTransaksiInput, ProductUncheckedCreateWithoutDetailTransaksiInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDetailTransaksiInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDetailTransaksiInput, ProductUncheckedUpdateWithoutDetailTransaksiInput>
  }

  export type ProductUpdateWithoutDetailTransaksiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    user?: UserUpdateOneWithoutProdukNestedInput
  }

  export type ProductUncheckedUpdateWithoutDetailTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kelasCreateWithoutSiswaInput = {
    namaKelas: string
    JumlahAnggota: number
  }

  export type kelasUncheckedCreateWithoutSiswaInput = {
    id?: number
    namaKelas: string
    JumlahAnggota: number
  }

  export type kelasCreateOrConnectWithoutSiswaInput = {
    where: kelasWhereUniqueInput
    create: XOR<kelasCreateWithoutSiswaInput, kelasUncheckedCreateWithoutSiswaInput>
  }

  export type kelasUpsertWithoutSiswaInput = {
    update: XOR<kelasUpdateWithoutSiswaInput, kelasUncheckedUpdateWithoutSiswaInput>
    create: XOR<kelasCreateWithoutSiswaInput, kelasUncheckedCreateWithoutSiswaInput>
    where?: kelasWhereInput
  }

  export type kelasUpdateToOneWithWhereWithoutSiswaInput = {
    where?: kelasWhereInput
    data: XOR<kelasUpdateWithoutSiswaInput, kelasUncheckedUpdateWithoutSiswaInput>
  }

  export type kelasUpdateWithoutSiswaInput = {
    namaKelas?: StringFieldUpdateOperationsInput | string
    JumlahAnggota?: IntFieldUpdateOperationsInput | number
  }

  export type kelasUncheckedUpdateWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaKelas?: StringFieldUpdateOperationsInput | string
    JumlahAnggota?: IntFieldUpdateOperationsInput | number
  }

  export type SiswaCreateWithoutKelasInput = {
    nis: number
    nama: string
  }

  export type SiswaUncheckedCreateWithoutKelasInput = {
    id?: number
    nis: number
    nama: string
  }

  export type SiswaCreateOrConnectWithoutKelasInput = {
    where: SiswaWhereUniqueInput
    create: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput>
  }

  export type SiswaCreateManyKelasInputEnvelope = {
    data: SiswaCreateManyKelasInput | SiswaCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type SiswaUpsertWithWhereUniqueWithoutKelasInput = {
    where: SiswaWhereUniqueInput
    update: XOR<SiswaUpdateWithoutKelasInput, SiswaUncheckedUpdateWithoutKelasInput>
    create: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput>
  }

  export type SiswaUpdateWithWhereUniqueWithoutKelasInput = {
    where: SiswaWhereUniqueInput
    data: XOR<SiswaUpdateWithoutKelasInput, SiswaUncheckedUpdateWithoutKelasInput>
  }

  export type SiswaUpdateManyWithWhereWithoutKelasInput = {
    where: SiswaScalarWhereInput
    data: XOR<SiswaUpdateManyMutationInput, SiswaUncheckedUpdateManyWithoutKelasInput>
  }

  export type SiswaScalarWhereInput = {
    AND?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
    OR?: SiswaScalarWhereInput[]
    NOT?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
    id?: IntFilter<"Siswa"> | number
    nis?: IntFilter<"Siswa"> | number
    nama?: StringFilter<"Siswa"> | string
    kelasId?: IntFilter<"Siswa"> | number
  }

  export type TransaksiCreateManyUserInput = {
    id?: number
    nama_konter?: string | null
    total_harga: Decimal | DecimalJsLike | number | string
    diskon?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCreateManyUserInput = {
    id?: number
    nama: string
    kategoriId: number
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransaksiUpdateWithoutUserInput = {
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailTransaksi?: DetailTransaksiUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_konter?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diskon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpdateWithoutUserInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    detailTransaksi?: DetailTransaksiUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyKategoriInput = {
    id?: number
    nama: string
    harga: Decimal | DecimalJsLike | number | string
    stok?: number
    deskripsi?: string | null
    gambar?: string | null
    status?: string | null
    userId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductUpdateWithoutKategoriInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutProdukNestedInput
    detailTransaksi?: DetailTransaksiUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stok?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DetailTransaksiCreateManyProductInput = {
    id?: number
    id_transaksi: number
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUpdateWithoutProductInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiUpdateOneRequiredWithoutDetailTransaksiNestedInput
  }

  export type DetailTransaksiUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_transaksi?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_transaksi?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiCreateManyTransaksiInput = {
    id?: number
    id_product: number
    qty: number
    harga_satuan: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUpdateWithoutTransaksiInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutDetailTransaksiNestedInput
  }

  export type DetailTransaksiUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga_satuan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SiswaCreateManyKelasInput = {
    id?: number
    nis: number
    nama: string
  }

  export type SiswaUpdateWithoutKelasInput = {
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
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