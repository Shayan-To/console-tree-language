# Console tree language support

## Features

Adds support for the simple language of console tree, including folding support.

## Examples

Here are two small examples of console tree syntax: (These are the class inheritance hierarchy for all descendants of the class in the first line!)

```
Stream (System.IO) #
├── BufferedStream (System.IO) $
├── BrotliStream (System.IO.Compression) $
├── DeflateStream (System.IO.Compression)
├── GZipStream (System.IO.Compression)
├── ZLibStream (System.IO.Compression) $
├── FileStream (System.IO)
│   └── IsolatedStorageFileStream (System.IO.IsolatedStorage)
├── MemoryStream (System.IO)
├── PipeStream (System.IO.Pipes) #
│   ├── AnonymousPipeClientStream (System.IO.Pipes) $
│   ├── AnonymousPipeServerStream (System.IO.Pipes) $
│   ├── NamedPipeClientStream (System.IO.Pipes) $
│   └── NamedPipeServerStream (System.IO.Pipes) $
├── UnmanagedMemoryStream (System.IO)
│   └── MemoryMappedViewStream (System.IO.MemoryMappedFiles) $
├── QuicStream (System.Net.Quic) $
├── AuthenticatedStream (System.Net.Security) #
│   ├── NegotiateStream (System.Net.Security)
│   └── SslStream (System.Net.Security)
├── NetworkStream (System.Net.Sockets)
└── CryptoStream (System.Security.Cryptography)
```

```
MemberInfo (System.Reflection) #
├── EventInfo (System.Reflection) #
│   └── ComAwareEventInfo (System.Runtime.InteropServices)
├── FieldInfo (System.Reflection) #
│   └── FieldBuilder (System.Reflection.Emit) $
├── MethodBase (System.Reflection) #
│   ├── ConstructorInfo (System.Reflection) #
│   │   └── ConstructorBuilder (System.Reflection.Emit) $
│   ├── MethodInfo (System.Reflection) #
│   │   ├── DynamicMethod (System.Reflection.Emit) $
│   └   └── MethodBuilder (System.Reflection.Emit) $
├── PropertyInfo (System.Reflection) #
│   └── PropertyBuilder (System.Reflection.Emit) $
├── Type (System) #
│   ├── TypeInfo (System.Reflection) #
│   │   ├── EnumBuilder (System.Reflection.Emit) $
│   │   ├── GenericTypeParameterBuilder (System.Reflection.Emit) $
│   │   ├── TypeBuilder (System.Reflection.Emit) $
└   └   └── TypeDelegator (System.Reflection)
```

## Release Notes

See the [change log](CHANGELOG.md).
