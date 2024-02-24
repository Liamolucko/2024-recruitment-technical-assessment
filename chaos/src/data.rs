use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    let mut response = DataResponse {
        string_len: 0,
        int_sum: 0,
    };

    for element in request.data {
        match element {
            StringOrInt::String(s) => response.string_len += s.len(),
            StringOrInt::Int(n) => response.int_sum += n,
        }
    }

    (StatusCode::OK, Json(response))
}

#[derive(Deserialize)]
pub struct DataRequest {
    data: Vec<StringOrInt>,
}

#[derive(Deserialize)]
#[serde(untagged)]
pub enum StringOrInt {
    String(String),
    Int(i64),
}

#[derive(Serialize)]
pub struct DataResponse {
    /// The sum of the lengths of all the input strings.
    string_len: usize,
    /// The sum of all the input integers.
    int_sum: i64,
}
