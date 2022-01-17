use std::io::BufWriter;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn compile(name: &str) -> String {
    let mut buf = BufWriter::new(Vec::new());
    buguc::run(name.to_string(), &mut buf).unwrap();
    String::from_utf8(buf.into_inner().unwrap()).unwrap()
}