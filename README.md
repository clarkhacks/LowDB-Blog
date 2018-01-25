# Json Micro Blog
A Json powered Micro Blog using jQuery.

## Documentation

```javascript
  var displayResources = $("#post-wrapper"); // Where the posts will be loaded
  var bio = $("#bio");                       // User's Bio location
  var userName = $("#userName");             // Username location
  var userPhoto = $("#userPhoto");           // Where the photo will be loaded
  var socialLink = $("#link");               // Location on link anchor
```

### Bio

```json
  "meta" : {
    "bio" : "All About You Here",
    ...
  }
```
The Bio is location under the `meta` section in your Json File.

### Name

```json
  "meta" : {
    ...
    "user" : "ClarkHacks"
  },
```

Your Name is located under the `meta` section in your Json File.

### Photo

```json
  "meta" : {
    ...
    "photo" : "Photo Link Here"
  }
```
The user photo link is located under the `meta` section in your Json File.

### Link

```json
  "meta" : {
    ...
    "link" : {
      "title" : "Text For Link",
      "value" : "Url"
    },
    ...
  }
```
Your social link is located under the `meta` section in your Json File.

### Posts

```json
"posts" : {
    "001" : {
      "content" : "Lorem ipsum dolor blah blah blah...",
      "date" : "January 25th 2018",
      "hash" : "permalink-hash",
      "title" : "Post Title"
    }
  }
```
* Posts are sorted by their unique identifers (`001` in our example).
* Post `content` is the rendered text of each post.
* The post `date` is the date of publication.
* `Hash` is used for the post's permalink.
* The post's title is under `title`.
