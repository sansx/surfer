use serde::Deserialize;

#[derive(Deserialize)]
pub struct ArticleInfo {
    pub user_id: String,
    pub subject: String,
    pub category_id: String,
    pub summary: String,
    pub topics: String,
    pub content: String,
}
