# AirBnB Clone - The Console

The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

# Project: 0x06. AirBnB clone - Web dynamic

## Resources

#### Read or watch:

- [Selector](https://intranet.alxswe.com/rltoken/Bl2mJVVG07XCP6E8qtsQMg)
- [Get and set content](https://intranet.alxswe.com/rltoken/oM3b0a0FGTy6AQ_UJ201Yw)
- [Manipulate CSS classes](https://intranet.alxswe.com/rltoken/LL2uScQvjWnj2ZEx2CzxXw)
- [Manipulate DOM elements](https://intranet.alxswe.com/rltoken/6JtTz9SaNX3AyVXht4tMYA)
- [Document ready](https://intranet.alxswe.com/rltoken/1AbzN1nEfBKoSjB-9kjmrA)
- [Introduction](https://intranet.alxswe.com/rltoken/OGDoIOd0cdmwDJFJy4aw5w)
- [GET & POST request](https://intranet.alxswe.com/rltoken/kmBzs_QPD72Oz--Yk80JHw)
- [HTTP access control (CORS)](https://intranet.alxswe.com/rltoken/tzqJx5SS5cF1BW_lAnXqqg)

## Learning Objectives

### General

- How cool it is to request your own API
- How to modify an HTML element style
- How to get and update an HTML element content
- How to modify the DOM
- How to make a <code>GET</code> request with JQuery Ajax
- How to make a <code>POST</code> request with JQuery Ajax
- How to listen/bind to DOM events
- How to listen/bind to user events

## Tasks

| Task                                        | File                                                                                                                                                                             |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 0. Last clone!                              | [AirBnB_clone_v4](./)                                                                                                                                                            |
| 1. Cash only                                | [0-hbnb.py](./0-hbnb.py), [templates/0-hbnb.html](./templates/0-hbnb.html)                                                                                                       |
| 2. Select some Amenities to be comfortable! | [1-hbnb.py](./1-hbnb.py), [templates/1-hbnb.html](./templates/1-hbnb.html), [static/scripts/1-hbnb.js](./static/scripts/1-hbnb.js)                                               |
| 3. API status                               | [2-hbnb.py](./2-hbnb.py), [templates/2-hbnb.html](./templates/2-hbnb.html), [3-header.css](./static/styles/3-header.css), [static/scripts/2-hbnb.js](./static/scripts/2-hbnb.js) |     |
| 4. Fetch places                             | [3-hbnb.py](./3-hbnb.py), [templates/3-hbnb.html](./templates/3-hbnb.html), [static/scripts/3-hbnb.js](./static/scripts/3-hbnb.js)                                               |
| 5. Filter places by Amenity                 | [4-hbnb.py](./4-hbnb.py), [templates/4-hbnb.html](./templates/4-hbnb.html), [static/scripts/4-hbnb.js](./static/scripts/4-hbnb.js)                                               |     |
| 6. States and Cities                        | [100-hbnb.py](./100-hbnb.py), [templates/100-hbnb.html](./templates/100-hbnb.html), [static/scripts/100-hbnb.js](./static/scripts/100-hbnb.js)                                   |     |
| 7. Reviews                                  | [101-hbnb.py](./101-hbnb.py), [templates/101-hbnb.html](./templates/101-hbnb.html), [static/scripts/101-hbnb.js](./static/scripts/101-hbnb.js)                                   |     |

#### Functionalities of this command interpreter:

- Create a new object (ex: a new User or a new Place)
- Retrieve an object from a file, a database etc...
- Do operations on objects (count, compute stats, etc...)
- Update attributes of an object
- Destroy an object

## Table of Content

- [Environment](#environment)
- [Installation](#installation)
- [File Descriptions](#file-descriptions)
- [Usage](#usage)
- [Examples of use](#examples-of-use)
- [Bugs](#bugs)
- [Authors](#authors)
- [License](#license)

## Environment

This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Installation

- Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
- Access AirBnb directory: `cd AirBnB_clone`
- Run hbnb(interactively): `./console` and enter command
- Run hbnb(non-interactively): `echo "<command>" | ./console.py`

## File Descriptions

[console.py](console.py) - the console contains the entry point of the command interpreter.
List of commands this console current supports:

- `EOF` - exits console
- `quit` - exits console
- `<emptyline>` - overwrites default emptyline method and does nothing
- `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
- `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file).
- `show` - Prints the string representation of an instance based on the class name and id.
- `all` - Prints all string representation of all instances based or not on the class name.
- `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file).

#### `models/` directory contains classes used for this project:

[base_model.py](/models/base_model.py) - The BaseModel class from which future classes will be derived

- `def __init__(self, *args, **kwargs)` - Initialization of the base model
- `def __str__(self)` - String representation of the BaseModel class
- `def save(self)` - Updates the attribute `updated_at` with the current datetime
- `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:

- [amenity.py](/models/amenity.py)
- [city.py](/models/city.py)
- [place.py](/models/place.py)
- [review.py](/models/review.py)
- [state.py](/models/state.py)
- [user.py](/models/user.py)

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :

[file_storage.py](/models/engine/file_storage.py) - serializes instances to a JSON file & deserializes back to instances

- `def all(self)` - returns the dictionary \_\_objects
- `def new(self, obj)` - sets in \_\_objects the obj with key <obj class name>.id
- `def save(self)` - serializes **objects to the JSON file (path: **file_path)
- ` def reload(self)` - deserializes the JSON file to \_\_objects

#### `/tests` directory contains all unit test cases for this project:

[/test_models/test_base_model.py](/tests/test_models/test_base_model.py) - Contains the TestBaseModel and TestBaseModelDocs classes
TestBaseModelDocs class:

- `def setUpClass(cls)`- Set up for the doc tests
- `def test_pep8_conformance_base_model(self)` - Test that models/base_model.py conforms to PEP8
- `def test_pep8_conformance_test_base_model(self)` - Test that tests/test_models/test_base_model.py conforms to PEP8
- `def test_bm_module_docstring(self)` - Test for the base_model.py module docstring
- `def test_bm_class_docstring(self)` - Test for the BaseModel class docstring
- `def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:

- `def test_is_base_model(self)` - Test that the instatiation of a BaseModel works
- `def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime
- `def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime
- `def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects

[/test_models/test_amenity.py](/tests/test_models/test_amenity.py) - Contains the TestAmenityDocs class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_amenity(self)` - Test that models/amenity.py conforms to PEP8
- `def test_pep8_conformance_test_amenity(self)` - Test that tests/test_models/test_amenity.py conforms to PEP8
- `def test_amenity_module_docstring(self)` - Test for the amenity.py module docstring
- `def test_amenity_class_docstring(self)` - Test for the Amenity class docstring

[/test_models/test_city.py](/tests/test_models/test_city.py) - Contains the TestCityDocs class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_city(self)` - Test that models/city.py conforms to PEP8
- `def test_pep8_conformance_test_city(self)` - Test that tests/test_models/test_city.py conforms to PEP8
- `def test_city_module_docstring(self)` - Test for the city.py module docstring
- `def test_city_class_docstring(self)` - Test for the City class docstring

[/test_models/test_file_storage.py](/tests/test_models/test_file_storage.py) - Contains the TestFileStorageDocs class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_file_storage(self)` - Test that models/file_storage.py conforms to PEP8
- `def test_pep8_conformance_test_file_storage(self)` - Test that tests/test_models/test_file_storage.py conforms to PEP8
- `def test_file_storage_module_docstring(self)` - Test for the file_storage.py module docstring
- `def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring

[/test_models/test_place.py](/tests/test_models/test_place.py) - Contains the TestPlaceDoc class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_place(self)` - Test that models/place.py conforms to PEP8.
- `def test_pep8_conformance_test_place(self)` - Test that tests/test_models/test_place.py conforms to PEP8.
- `def test_place_module_docstring(self)` - Test for the place.py module docstring
- `def test_place_class_docstring(self)` - Test for the Place class docstring

[/test_models/test_review.py](/tests/test_models/test_review.py) - Contains the TestReviewDocs class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_review(self)` - Test that models/review.py conforms to PEP8
- `def test_pep8_conformance_test_review(self)` - Test that tests/test_models/test_review.py conforms to PEP8
- `def test_review_module_docstring(self)` - Test for the review.py module docstring
- `def test_review_class_docstring(self)` - Test for the Review class docstring

[/test_models/state.py](/tests/test_models/test_state.py) - Contains the TestStateDocs class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_state(self)` - Test that models/state.py conforms to PEP8
- `def test_pep8_conformance_test_state(self)` - Test that tests/test_models/test_state.py conforms to PEP8
- `def test_state_module_docstring(self)` - Test for the state.py module docstring
- `def test_state_class_docstring(self)` - Test for the State class docstring

[/test_models/user.py](/tests/test_models/test_user.py) - Contains the TestUserDocs class:

- `def setUpClass(cls)` - Set up for the doc tests
- `def test_pep8_conformance_user(self)` - Test that models/user.py conforms to PEP8
- `def test_pep8_conformance_test_user(self)` - Test that tests/test_models/test_user.py conforms to PEP8
- `def test_user_module_docstring(self)` - Test for the user.py module docstring
- `def test_user_class_docstring(self)` - Test for the User class docstring

## Examples of use

```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```

## Bugs

No known bugs at this time.

## Authors

Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)  
Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)  
Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)  
David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)

Second part of Airbnb: Joann Vuong

## License

Public Domain. No copy write protection.
