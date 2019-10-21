initSidebarItems({"enum":[["Unexpected","`Unexpected` represents an unexpected invocation of any one of the `Visitor` trait methods."]],"mod":[["value","Building blocks for deserializing basic values using the `IntoDeserializer` trait."]],"struct":[["IgnoredAny","An efficient way of discarding data from a deserializer."]],"trait":[["Deserialize","A data structure that can be deserialized from any data format supported by Serde."],["DeserializeOwned","A data structure that can be deserialized without borrowing any data from the deserializer."],["DeserializeSeed","`DeserializeSeed` is the stateful form of the `Deserialize` trait. If you ever find yourself looking for a way to pass data into a `Deserialize` impl, this trait is the way to do it."],["Deserializer","A data format that can deserialize any data structure supported by Serde."],["EnumAccess","Provides a `Visitor` access to the data of an enum in the input."],["Error","The `Error` trait allows `Deserialize` implementations to create descriptive error messages belonging to the `Deserializer` against which they are currently running."],["Expected","`Expected` represents an explanation of what data a `Visitor` was expecting to receive."],["IntoDeserializer","Converts an existing value into a `Deserializer` from which other values can be deserialized."],["MapAccess","Provides a `Visitor` access to each entry of a map in the input."],["SeqAccess","Provides a `Visitor` access to each element of a sequence in the input."],["VariantAccess","`VariantAccess` is a visitor that is created by the `Deserializer` and passed to the `Deserialize` to deserialize the content of a particular enum variant."],["Visitor","This trait represents a visitor that walks through a deserializer."]]});