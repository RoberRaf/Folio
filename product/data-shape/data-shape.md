# Data Shape

## Entities

### User
A registered account holder. Stores identity, authentication credentials, and personal preferences.

### Book
A photo book project — either in draft or submitted for printing. Holds the overall design configuration including the selected theme, cover details, and ordered page structure.

### Page
A single page within a Book. Defines its order, the layout style (full-page, partial, custom) and the photos placed on it.

### Photo
An image uploaded by the User to their personal library. Can be placed on one or more Pages across a Book.

### Order
A confirmed purchase of a Book. Tracks payment status, delivery address, and shipping progress.

## Relationships

- User has many Books
- User has many Photos
- Book belongs to User
- Book has many Pages
- Page belongs to Book
- Page has many Photos
- Photo belongs to User
- Order belongs to User
- Order has one Book
