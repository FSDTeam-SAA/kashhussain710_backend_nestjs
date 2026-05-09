**Website: https://carapi.app/profile/users/api

POST: https://carapi.app/api/auth/login

{**

&#x20; **"api\_token": "7704bcfa-a069-4a45-aac8-53380e15c171",**

&#x20; **"api\_secret": "1bd6cc566f262e53ba09d7ac9c47fbcf"**

**}**



**GET:** https://carapi.app/api/trims/v2?year=2019\&make=BMW\&verbose=yes



**Authorization:** Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXJhcGkuYXBwIiwic3ViIjoiMjEzZWJhNmEtNDI0NS00NTk5LWE1OWQtNzA4NjA3MTlkMDlkIiwiYXVkIjoiMjEzZWJhNmEtNDI0NS00NTk5LWE1OWQtNzA4NjA3MTlkMDlkIiwiZXhwIjoxNzc4NzM1MDIzLCJpYXQiOjE3NzgxMzAyMjMsImp0aSI6ImRkZGE3OGRkLWFjYjQtNGI5YS04ZTMxLWRiMTA5NjZlOTk5YiIsInVzZXIiOnsic3Vic2NyaXB0aW9ucyI6W10sInJhdGVfbGltaXRfdHlwZSI6ImhhcmQiLCJhZGRvbnMiOnsiYW50aXF1ZV92ZWhpY2xlcyI6ZmFsc2UsImRhdGFfZmVlZCI6ZmFsc2V9fX0.IYy0l0yx7vHRWXQXyKkmFjS0JlNoOAk3IvCJnMdR56w



**Response:** {

&#x20;   "collection": {

&#x20;       "url": "/api/trims/v2?year=2019\&make=BMW\&verbose=yes",

&#x20;       "count": 79,

&#x20;       "pages": 1,

&#x20;       "total": 79,

&#x20;       "next": "",

&#x20;       "prev": "",

&#x20;       "first": "/api/trims/v2?year=2019\&make=BMW\&verbose=yes",

&#x20;       "last": ""

&#x20;   },

&#x20;   "data": \[

&#x20;       {

&#x20;           "id": 9366,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 4267,

&#x20;           "submodel\_id": 70715,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "530i",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "530i",

&#x20;           "description": "530i 4dr Sedan (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 53400,

&#x20;           "invoice": 50160,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9371,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 5102,

&#x20;           "submodel\_id": 70751,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M5",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M5",

&#x20;           "description": "M5 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 102700,

&#x20;           "invoice": 96010,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9372,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 5102,

&#x20;           "submodel\_id": 70752,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M5",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Competition",

&#x20;           "trim": "M5 Competition",

&#x20;           "description": "M5 Competition 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 110000,

&#x20;           "invoice": 102800,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9381,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 5516,

&#x20;           "submodel\_id": 70718,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "740i",

&#x20;           "series": "7 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "740i",

&#x20;           "description": "740i 4dr Sedan (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 83650,

&#x20;           "invoice": 78295,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9368,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 5584,

&#x20;           "submodel\_id": 70750,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "540i",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "540i",

&#x20;           "description": "540i 4dr Sedan (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 58950,

&#x20;           "invoice": 55325,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9405,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 5991,

&#x20;           "submodel\_id": 70728,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X5",

&#x20;           "series": "X5",

&#x20;           "submodel": "xDrive40i",

&#x20;           "trim": "xDrive40i",

&#x20;           "description": "xDrive40i 4dr SUV AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 60700,

&#x20;           "invoice": 56950,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9406,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 5991,

&#x20;           "submodel\_id": 70729,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X5",

&#x20;           "series": "X5",

&#x20;           "submodel": "xDrive50i",

&#x20;           "trim": "xDrive50i",

&#x20;           "description": "xDrive50i 4dr SUV AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 75750,

&#x20;           "invoice": 70950,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9344,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6062,

&#x20;           "submodel\_id": 70737,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "330i",

&#x20;           "series": "3 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "330i",

&#x20;           "description": "330i 4dr Sedan (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 40250,

&#x20;           "invoice": 37935,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9413,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6232,

&#x20;           "submodel\_id": 70736,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "Z4",

&#x20;           "series": "Z4",

&#x20;           "submodel": "sDrive30i",

&#x20;           "trim": "sDrive30i",

&#x20;           "description": "sDrive30i 2dr Convertible (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 49700,

&#x20;           "invoice": 46720,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9402,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6329,

&#x20;           "submodel\_id": 70743,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X3",

&#x20;           "series": "X3",

&#x20;           "submodel": "M40i",

&#x20;           "trim": "M40i",

&#x20;           "description": "M40i 4dr SUV AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 54650,

&#x20;           "invoice": 51325,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9400,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6329,

&#x20;           "submodel\_id": 70744,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X3",

&#x20;           "series": "X3",

&#x20;           "submodel": "sDrive30i",

&#x20;           "trim": "sDrive30i",

&#x20;           "description": "sDrive30i 4dr SUV (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 41000,

&#x20;           "invoice": 38630,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9401,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6329,

&#x20;           "submodel\_id": 70745,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X3",

&#x20;           "series": "X3",

&#x20;           "submodel": "xDrive30i",

&#x20;           "trim": "xDrive30i",

&#x20;           "description": "xDrive30i 4dr SUV AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 43000,

&#x20;           "invoice": 40490,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9384,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6480,

&#x20;           "submodel\_id": 70775,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "750i",

&#x20;           "series": "7 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "750i",

&#x20;           "description": "750i 4dr Sedan (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 96950,

&#x20;           "invoice": 90665,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9388,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6559,

&#x20;           "submodel\_id": 70756,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "Alpina B7",

&#x20;           "series": "ALPINA B7",

&#x20;           "submodel": "xDrive",

&#x20;           "trim": "xDrive",

&#x20;           "description": "xDrive 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 139350,

&#x20;           "invoice": 130095,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9410,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6654,

&#x20;           "submodel\_id": 70730,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X6",

&#x20;           "series": "X6",

&#x20;           "submodel": "M",

&#x20;           "trim": "M",

&#x20;           "description": "M 4dr SUV AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 105700,

&#x20;           "invoice": 98800,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9407,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6654,

&#x20;           "submodel\_id": 70731,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X6",

&#x20;           "series": "X6",

&#x20;           "submodel": "sDrive35i",

&#x20;           "trim": "sDrive35i",

&#x20;           "description": "sDrive35i 4dr SUV (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 63550,

&#x20;           "invoice": 59600,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9408,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6654,

&#x20;           "submodel\_id": 70732,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X6",

&#x20;           "series": "X6",

&#x20;           "submodel": "xDrive35i",

&#x20;           "trim": "xDrive35i",

&#x20;           "description": "xDrive35i 4dr SUV AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 65850,

&#x20;           "invoice": 61740,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9409,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6654,

&#x20;           "submodel\_id": 70733,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X6",

&#x20;           "series": "X6",

&#x20;           "submodel": "xDrive50i",

&#x20;           "trim": "xDrive50i",

&#x20;           "description": "xDrive50i 4dr SUV AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 78300,

&#x20;           "invoice": 73320,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9382,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6786,

&#x20;           "submodel\_id": 70755,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "750i xDrive",

&#x20;           "series": "7 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "750i xDrive",

&#x20;           "description": "750i xDrive 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 99950,

&#x20;           "invoice": 93455,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9395,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6884,

&#x20;           "submodel\_id": 70723,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X1",

&#x20;           "series": "X1",

&#x20;           "submodel": "sDrive28i",

&#x20;           "trim": "sDrive28i",

&#x20;           "description": "sDrive28i 4dr SUV (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 34950,

&#x20;           "invoice": 33005,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9396,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6884,

&#x20;           "submodel\_id": 70724,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X1",

&#x20;           "series": "X1",

&#x20;           "submodel": "xDrive28i",

&#x20;           "trim": "xDrive28i",

&#x20;           "description": "xDrive28i 4dr SUV AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 36950,

&#x20;           "invoice": 34865,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9376,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6950,

&#x20;           "submodel\_id": 70769,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "640i Gran Coupe",

&#x20;           "series": "6 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "640i",

&#x20;           "description": "640i 4dr Sedan (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 81500,

&#x20;           "invoice": 76295,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9375,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6951,

&#x20;           "submodel\_id": 70772,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "650i Gran Coupe",

&#x20;           "series": "6 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "650i",

&#x20;           "description": "650i 4dr Sedan (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 93100,

&#x20;           "invoice": 87085,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9373,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6952,

&#x20;           "submodel\_id": 70773,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "650i xDrive Gran Coupe",

&#x20;           "series": "6 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "650i xDrive",

&#x20;           "description": "650i xDrive 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 96100,

&#x20;           "invoice": 89875,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9389,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7003,

&#x20;           "submodel\_id": 70758,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "i3",

&#x20;           "series": "i3",

&#x20;           "submodel": "Base",

&#x20;           "trim": "Base",

&#x20;           "description": "4dr Hatchback (electric DD)",

&#x20;           "msrp": 44450,

&#x20;           "invoice": 41840,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9390,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7003,

&#x20;           "submodel\_id": 70759,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "i3",

&#x20;           "series": "i3",

&#x20;           "submodel": "Range Extender",

&#x20;           "trim": "Base",

&#x20;           "description": "4dr Hatchback w/Range Extender (0.6L 2cyl gas/electric plug-in hybrid DD)",

&#x20;           "msrp": 48300,

&#x20;           "invoice": 45420,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:25:07-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9393,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7004,

&#x20;           "submodel\_id": 70766,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "i8",

&#x20;           "series": "i8",

&#x20;           "submodel": "Base",

&#x20;           "trim": "Base",

&#x20;           "description": "2dr Coupe AWD (1.5L 3cyl Turbo gas/electric plug-in hybrid 6A)",

&#x20;           "msrp": 147500,

&#x20;           "invoice": 137675,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2024-03-02T09:59:55-05:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9394,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7004,

&#x20;           "submodel\_id": 70766,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "i8",

&#x20;           "series": "i8",

&#x20;           "submodel": "Base",

&#x20;           "trim": "Base",

&#x20;           "description": "2dr Convertible AWD (1.5L 3cyl Turbo gas/electric plug-in hybrid 6A)",

&#x20;           "msrp": 163300,

&#x20;           "invoice": 152370,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2024-03-02T09:59:55-05:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9374,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7005,

&#x20;           "submodel\_id": 70770,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "640i xDrive Gran Coupe",

&#x20;           "series": "6 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "640i xDrive",

&#x20;           "description": "640i xDrive 4dr Sedan AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 84500,

&#x20;           "invoice": 79085,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9377,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7006,

&#x20;           "submodel\_id": 70777,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M6 Gran Coupe",

&#x20;           "series": "6 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M6",

&#x20;           "description": "M6 4dr Sedan (4.4L 8cyl Turbo 7AM)",

&#x20;           "msrp": 119900,

&#x20;           "invoice": 112005,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9357,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7066,

&#x20;           "submodel\_id": 70720,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M4",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M4",

&#x20;           "description": "M4 2dr Coupe (3.0L 6cyl Turbo 6M)",

&#x20;           "msrp": 69150,

&#x20;           "invoice": 64810,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9358,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7066,

&#x20;           "submodel\_id": 70720,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M4",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M4",

&#x20;           "description": "M4 2dr Convertible (3.0L 6cyl Turbo 6M)",

&#x20;           "msrp": 77650,

&#x20;           "invoice": 72715,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9359,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7066,

&#x20;           "submodel\_id": 70721,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M4",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "CS",

&#x20;           "trim": "M4",

&#x20;           "description": "M4 CS 2dr Coupe (3.0L 6cyl Turbo 7AM)",

&#x20;           "msrp": 103100,

&#x20;           "invoice": 96385,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9404,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7067,

&#x20;           "submodel\_id": 70746,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X4",

&#x20;           "series": "X4",

&#x20;           "submodel": "M40i",

&#x20;           "trim": "M40i",

&#x20;           "description": "M40i 4dr SUV AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 60450,

&#x20;           "invoice": 56720,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9403,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7067,

&#x20;           "submodel\_id": 70747,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X4",

&#x20;           "series": "X4",

&#x20;           "submodel": "xDrive30i",

&#x20;           "trim": "xDrive30i",

&#x20;           "description": "xDrive30i 4dr SUV AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 50450,

&#x20;           "invoice": 47420,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9387,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7068,

&#x20;           "submodel\_id": 70776,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "Alpina B6 xDrive Gran Coupe",

&#x20;           "series": "ALPINA B6 Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "xDrive",

&#x20;           "description": "xDrive 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 124400,

&#x20;           "invoice": 116190,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9343,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7131,

&#x20;           "submodel\_id": 70719,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M2",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Competition",

&#x20;           "trim": "M2 Competition",

&#x20;           "description": "M2 Competition 2dr Coupe (3.0L 6cyl Turbo 6M)",

&#x20;           "msrp": 58900,

&#x20;           "invoice": 55275,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9335,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7191,

&#x20;           "submodel\_id": 70711,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "230i",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "230i",

&#x20;           "description": "230i 2dr Coupe (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 35300,

&#x20;           "invoice": 33330,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9337,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7191,

&#x20;           "submodel\_id": 70711,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "230i",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "230i",

&#x20;           "description": "230i 2dr Convertible (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 41100,

&#x20;           "invoice": 38725,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9336,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7192,

&#x20;           "submodel\_id": 70712,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "230i xDrive",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "230i xDrive",

&#x20;           "description": "230i xDrive 2dr Coupe AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 37300,

&#x20;           "invoice": 35190,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9338,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7192,

&#x20;           "submodel\_id": 70712,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "230i xDrive",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "230i xDrive",

&#x20;           "description": "230i xDrive 2dr Convertible AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 43100,

&#x20;           "invoice": 40585,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9354,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7193,

&#x20;           "submodel\_id": 70713,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "430i",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "430i",

&#x20;           "description": "430i 2dr Convertible (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 52950,

&#x20;           "invoice": 49745,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9356,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7193,

&#x20;           "submodel\_id": 70713,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "430i",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "430i",

&#x20;           "description": "430i 2dr Coupe (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 44800,

&#x20;           "invoice": 42165,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9351,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7194,

&#x20;           "submodel\_id": 70714,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "430i xDrive",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "430i xDrive",

&#x20;           "description": "430i xDrive 2dr Convertible AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 54950,

&#x20;           "invoice": 51605,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9353,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7194,

&#x20;           "submodel\_id": 70714,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "430i xDrive",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "430i xDrive",

&#x20;           "description": "430i xDrive 2dr Coupe AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 46800,

&#x20;           "invoice": 44025,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9367,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7195,

&#x20;           "submodel\_id": 70716,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "530i xDrive",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "530i xDrive",

&#x20;           "description": "530i xDrive 4dr Sedan AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 55700,

&#x20;           "invoice": 52300,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9369,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7196,

&#x20;           "submodel\_id": 70717,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "540i xDrive",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "540i xDrive",

&#x20;           "description": "540i xDrive 4dr Sedan AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 61250,

&#x20;           "invoice": 57465,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9345,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7197,

&#x20;           "submodel\_id": 70738,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "330i xDrive",

&#x20;           "series": "3 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "330i xDrive",

&#x20;           "description": "330i xDrive 4dr Sedan AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 42250,

&#x20;           "invoice": 39795,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9346,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7197,

&#x20;           "submodel\_id": 70738,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "330i xDrive",

&#x20;           "series": "3 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "330i xDrive",

&#x20;           "description": "330i xDrive 4dr Wagon AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 45000,

&#x20;           "invoice": 42350,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9362,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7198,

&#x20;           "submodel\_id": 70739,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "430i Gran Coupe",

&#x20;           "series": "4 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "430i",

&#x20;           "description": "430i 4dr Sedan (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 44600,

&#x20;           "invoice": 41980,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9363,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7199,

&#x20;           "submodel\_id": 70740,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "430i xDrive Gran Coupe",

&#x20;           "series": "4 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "430i xDrive",

&#x20;           "description": "430i xDrive 4dr Sedan AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 46600,

&#x20;           "invoice": 43840,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9339,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7200,

&#x20;           "submodel\_id": 70741,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M240i",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M240i",

&#x20;           "description": "M240i 2dr Coupe (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 45800,

&#x20;           "invoice": 43095,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9340,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7200,

&#x20;           "submodel\_id": 70741,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M240i",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M240i",

&#x20;           "description": "M240i 2dr Convertible (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 50400,

&#x20;           "invoice": 47370,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9341,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7201,

&#x20;           "submodel\_id": 70742,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M240i xDrive",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M240i xDrive",

&#x20;           "description": "M240i xDrive 2dr Coupe AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 47800,

&#x20;           "invoice": 44955,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9342,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7201,

&#x20;           "submodel\_id": 70742,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M240i xDrive",

&#x20;           "series": "2 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M240i xDrive",

&#x20;           "description": "M240i xDrive 2dr Convertible AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 52400,

&#x20;           "invoice": 49230,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9380,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7202,

&#x20;           "submodel\_id": 70754,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "740i xDrive",

&#x20;           "series": "7 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "740i xDrive",

&#x20;           "description": "740i xDrive 4dr Sedan AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 86650,

&#x20;           "invoice": 81085,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9383,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7203,

&#x20;           "submodel\_id": 70757,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M760i xDrive",

&#x20;           "series": "7 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M760i xDrive",

&#x20;           "description": "M760i xDrive 4dr Sedan AWD (6.6L 12cyl Turbo 8A)",

&#x20;           "msrp": 156700,

&#x20;           "invoice": 146230,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9349,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7204,

&#x20;           "submodel\_id": 70762,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "440i",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "440i",

&#x20;           "description": "440i 2dr Convertible (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 60000,

&#x20;           "invoice": 56300,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9352,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7204,

&#x20;           "submodel\_id": 70762,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "440i",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "440i",

&#x20;           "description": "440i 2dr Coupe (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 51200,

&#x20;           "invoice": 48115,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9360,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7205,

&#x20;           "submodel\_id": 70763,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "440i Gran Coupe",

&#x20;           "series": "4 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "440i",

&#x20;           "description": "440i 4dr Sedan (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 51000,

&#x20;           "invoice": 47930,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9350,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7206,

&#x20;           "submodel\_id": 70764,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "440i xDrive",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "440i xDrive",

&#x20;           "description": "440i xDrive 2dr Convertible AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 62000,

&#x20;           "invoice": 58160,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9355,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7206,

&#x20;           "submodel\_id": 70764,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "440i xDrive",

&#x20;           "series": "4 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "440i xDrive",

&#x20;           "description": "440i xDrive 2dr Coupe AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 53200,

&#x20;           "invoice": 49975,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9361,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7207,

&#x20;           "submodel\_id": 70765,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "440i xDrive Gran Coupe",

&#x20;           "series": "4 Series Gran Coupe",

&#x20;           "submodel": "Base",

&#x20;           "trim": "440i xDrive",

&#x20;           "description": "440i xDrive 4dr Sedan AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 53000,

&#x20;           "invoice": 49790,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9347,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7208,

&#x20;           "submodel\_id": 70767,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "330i GT xDrive",

&#x20;           "series": "3 Series Gran Turismo",

&#x20;           "submodel": "Base",

&#x20;           "trim": "330i xDrive",

&#x20;           "description": "330i xDrive 4dr Hatchback AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 45400,

&#x20;           "invoice": 42720,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9348,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7209,

&#x20;           "submodel\_id": 70768,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "340i GT xDrive",

&#x20;           "series": "3 Series Gran Turismo",

&#x20;           "submodel": "Base",

&#x20;           "trim": "340i xDrive",

&#x20;           "description": "340i xDrive 4dr Hatchback AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 51250,

&#x20;           "invoice": 48165,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9379,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7210,

&#x20;           "submodel\_id": 70774,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "740e xDrive",

&#x20;           "series": "7 Series",

&#x20;           "submodel": "iPerformance",

&#x20;           "trim": "740e xDrive iPerformance",

&#x20;           "description": "740e xDrive iPerformance 4dr Sedan AWD (2.0L 4cyl Turbo gas/electric plug-in hybrid 8A)",

&#x20;           "msrp": 91250,

&#x20;           "invoice": 85365,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2024-03-02T09:59:55-05:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9399,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7264,

&#x20;           "submodel\_id": 70725,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X2",

&#x20;           "series": "X2",

&#x20;           "submodel": "M35i",

&#x20;           "trim": "M35i",

&#x20;           "description": "M35i 4dr SUV AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 46450,

&#x20;           "invoice": 43700,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9397,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7264,

&#x20;           "submodel\_id": 70726,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X2",

&#x20;           "series": "X2",

&#x20;           "submodel": "sDrive28i",

&#x20;           "trim": "sDrive28i",

&#x20;           "description": "sDrive28i 4dr SUV (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 36400,

&#x20;           "invoice": 34350,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9398,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7264,

&#x20;           "submodel\_id": 70727,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X2",

&#x20;           "series": "X2",

&#x20;           "submodel": "xDrive28i",

&#x20;           "trim": "xDrive28i",

&#x20;           "description": "xDrive28i 4dr SUV AWD (2.0L 4cyl Turbo 8A)",

&#x20;           "msrp": 38400,

&#x20;           "invoice": 36210,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9364,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7265,

&#x20;           "submodel\_id": 70748,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "530e",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "530e iPerformance",

&#x20;           "description": "530e iPerformance 4dr Sedan (2.0L 4cyl Turbo gas/electric plug-in hybrid 8A)",

&#x20;           "msrp": 53400,

&#x20;           "invoice": 50160,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2024-03-02T09:59:55-05:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9365,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7266,

&#x20;           "submodel\_id": 70749,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "530e xDrive",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "530e xDrive iPerformance",

&#x20;           "description": "530e xDrive iPerformance 4dr Sedan AWD (2.0L 4cyl Turbo gas/electric plug-in hybrid 8A)",

&#x20;           "msrp": 55700,

&#x20;           "invoice": 52300,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2024-03-02T09:59:55-05:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9370,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7267,

&#x20;           "submodel\_id": 70753,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M550i xDrive",

&#x20;           "series": "5 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M550i xDrive",

&#x20;           "description": "M550i xDrive 4dr Sedan AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 74450,

&#x20;           "invoice": 69740,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9391,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7268,

&#x20;           "submodel\_id": 70760,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "i3s",

&#x20;           "series": "i3",

&#x20;           "submodel": "Base",

&#x20;           "trim": "s",

&#x20;           "description": "s 4dr Hatchback (electric DD)",

&#x20;           "msrp": 47650,

&#x20;           "invoice": 44815,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9392,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7268,

&#x20;           "submodel\_id": 70761,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "i3s",

&#x20;           "series": "i3",

&#x20;           "submodel": "Range Extender",

&#x20;           "trim": "s",

&#x20;           "description": "s 4dr Hatchback w/Range Extender (0.6L 2cyl gas/electric plug-in hybrid DD)",

&#x20;           "msrp": 51500,

&#x20;           "invoice": 48395,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:25:07-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9378,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7269,

&#x20;           "submodel\_id": 70771,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "640i xDrive Gran Turismo",

&#x20;           "series": "6 Series Gran Turismo",

&#x20;           "submodel": "Base",

&#x20;           "trim": "640i xDrive",

&#x20;           "description": "640i xDrive 4dr Hatchback AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 70300,

&#x20;           "invoice": 65880,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9385,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7326,

&#x20;           "submodel\_id": 70722,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M850i xDrive",

&#x20;           "series": "8 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M850i xDrive",

&#x20;           "description": "M850i xDrive 2dr Coupe AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 111900,

&#x20;           "invoice": 104565,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9386,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7326,

&#x20;           "submodel\_id": 70722,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "M850i xDrive",

&#x20;           "series": "8 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "M850i xDrive",

&#x20;           "description": "M850i xDrive 2dr Convertible AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 121400,

&#x20;           "invoice": 113400,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9411,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7327,

&#x20;           "submodel\_id": 70734,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X7",

&#x20;           "series": "X7",

&#x20;           "submodel": "xDrive40i",

&#x20;           "trim": "xDrive40i",

&#x20;           "description": "xDrive40i 4dr SUV AWD (3.0L 6cyl Turbo 8A)",

&#x20;           "msrp": 73900,

&#x20;           "invoice": 69225,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       },

&#x20;       {

&#x20;           "id": 9412,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 7327,

&#x20;           "submodel\_id": 70735,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "X7",

&#x20;           "series": "X7",

&#x20;           "submodel": "xDrive50i",

&#x20;           "trim": "xDrive50i",

&#x20;           "description": "xDrive50i 4dr SUV AWD (4.4L 8cyl Turbo 8A)",

&#x20;           "msrp": 92600,

&#x20;           "invoice": 86620,

&#x20;           "created": "2023-06-29T21:01:06-04:00",

&#x20;           "modified": "2023-06-29T21:01:06-04:00"

&#x20;       }

&#x20;   ]

}



**performance:**

GET: https://carapi.app/api/engines/v2?trim\_id=9344\&verbose=yes



**Authorization:** Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXJhcGkuYXBwIiwic3ViIjoiMjEzZWJhNmEtNDI0NS00NTk5LWE1OWQtNzA4NjA3MTlkMDlkIiwiYXVkIjoiMjEzZWJhNmEtNDI0NS00NTk5LWE1OWQtNzA4NjA3MTlkMDlkIiwiZXhwIjoxNzc4NzM1MDIzLCJpYXQiOjE3NzgxMzAyMjMsImp0aSI6ImRkZGE3OGRkLWFjYjQtNGI5YS04ZTMxLWRiMTA5NjZlOTk5YiIsInVzZXIiOnsic3Vic2NyaXB0aW9ucyI6W10sInJhdGVfbGltaXRfdHlwZSI6ImhhcmQiLCJhZGRvbnMiOnsiYW50aXF1ZV92ZWhpY2xlcyI6ZmFsc2UsImRhdGFfZmVlZCI6ZmFsc2V9fX0.IYy0l0yx7vHRWXQXyKkmFjS0JlNoOAk3IvCJnMdR56w


Response:  
{

&#x20;   "collection": {

&#x20;       "url": "/api/engines/v2?trim\_id=9344\&verbose=yes",

&#x20;       "count": 1,

&#x20;       "pages": 1,

&#x20;       "total": 1,

&#x20;       "next": "",

&#x20;       "prev": "",

&#x20;       "first": "/api/engines/v2?trim\_id=9344\&verbose=yes",

&#x20;       "last": ""

&#x20;   },

&#x20;   "data": \[

&#x20;       {

&#x20;           "id": 9344,

&#x20;           "make\_id": 3,

&#x20;           "model\_id": 6062,

&#x20;           "submodel\_id": 70737,

&#x20;           "trim\_id": 9344,

&#x20;           "year": 2019,

&#x20;           "make": "BMW",

&#x20;           "model": "330i",

&#x20;           "series": "3 Series",

&#x20;           "submodel": "Base",

&#x20;           "trim": "330i",

&#x20;           "trim\_description": "330i 4dr Sedan (2.0L 4cyl Turbo 8A)",

&#x20;           "engine\_type": "gas",

&#x20;           "fuel\_type": "premium unleaded (recommended)",

&#x20;           "cylinders": "I4",

&#x20;           "size": "2.0",

&#x20;           "horsepower\_hp": 255,

&#x20;           "horsepower\_rpm": 5000,

&#x20;           "torque\_ft\_lbs": 295,

&#x20;           "torque\_rpm": 1550,

&#x20;           "valves": 16,

&#x20;           "valve\_timing": "Variable",

&#x20;           "cam\_type": "Double overhead cam (DOHC)",

&#x20;           "drive\_type": "rear wheel drive",

&#x20;           "transmission": "8-speed shiftable automatic"

&#x20;       }

&#x20;   ]

}

