export default function() {

  this.post('/api/NumberSequence/:number', function() {
    return [
  {
    "Numbers": [{"Value": 0,"DisplayValue": "0"
      },{"Value": 1,"DisplayValue": "1"
      },{"Value": 2,"DisplayValue": "2"
      },{"Value": 3,"DisplayValue": "3"
      },{"Value": 4,"DisplayValue": "4"
      },{"Value": 5,"DisplayValue": "5"
      },{"Value": 6,"DisplayValue": "6"
      },{"Value": 7,"DisplayValue": "7"
      },{"Value": 8,"DisplayValue": "8"
      },{"Value": 9,"DisplayValue": "9"
    },{"Value": 10, "DisplayValue": "10"
      }
    ],
    "ProcessorName": "Sequence of numbers from 0 to 10"
  },
  {
    "Numbers": [
      {"Value": 1,"DisplayValue": "1"
      },{"Value": 3,"DisplayValue": "3"
      },{"Value": 5,"DisplayValue": "5"
      },{"Value": 7,"DisplayValue": "7"
      },{"Value": 9,"DisplayValue": "9"
      }
    ],
    "ProcessorName": "Odd Numbers"
  },
  {
    "Numbers": [
      {"Value": 0,"DisplayValue": "0"
      },{"Value": 2,"DisplayValue": "2"
      },{"Value": 4,"DisplayValue": "4"
      },{"Value": 6,"DisplayValue": "6"
      },{"Value": 8,"DisplayValue": "8"
    },{"Value": 10, "DisplayValue": "10"
      }
    ],
    "ProcessorName": "Even Numbers"
  },
  {
    "Numbers": [
      {"Value": 0,"DisplayValue": "C"
      },{"Value": 1,"DisplayValue": "1"
      },{"Value": 2,"DisplayValue": "2"
      },{"Value": 3,"DisplayValue": "C"
      },{"Value": 4,"DisplayValue": "4"
      },{"Value": 5,"DisplayValue": "5"
      },{"Value": 6,"DisplayValue": "C"
      },{"Value": 7,"DisplayValue": "7"
      },{"Value": 8,"DisplayValue": "8"
      },{"Value": 9,"DisplayValue": "C"
    },{"Value": 10, "DisplayValue": "10"
      }
    ],
    "ProcessorName": "Multiples of Three"
  },
  {
    "Numbers": [
      {"Value": 0,"DisplayValue": "E"
      },{"Value": 1,"DisplayValue": "1"
      },{"Value": 2,"DisplayValue": "2"
      },{"Value": 3,"DisplayValue": "3"
      },{"Value": 4,"DisplayValue": "4"
      },{"Value": 5,"DisplayValue": "E"
      },{"Value": 6,"DisplayValue": "6"
      },{"Value": 7,"DisplayValue": "7"
      },{"Value": 8,"DisplayValue": "8"
      },{"Value": 9,"DisplayValue": "9"
    },{"Value": 10, "DisplayValue": "E"
      }
    ],
    "ProcessorName": "Multiples of Five"
  },
  {
    "Numbers": [
      {"Value": 0,"DisplayValue": "Z"
      },{"Value": 1,"DisplayValue": "1"
      },{"Value": 2,"DisplayValue": "2"
      },{"Value": 3,"DisplayValue": "3"
      },{"Value": 4,"DisplayValue": "4"
      },{"Value": 5,"DisplayValue": "5"
      },{"Value": 6,"DisplayValue": "6"
      },{"Value": 7,"DisplayValue": "7"
      },{"Value": 8,"DisplayValue": "8"
      },{"Value": 9,"DisplayValue": "9"
    },{"Value": 10, "DisplayValue": "10"
      }
    ],
    "ProcessorName": "Multiples of Five and Three"
  },
  {
    "Numbers": [
      {"Value": 0,"DisplayValue": "0" }
      ,{"Value": 1,"DisplayValue": "1"
      },{"Value": 1,"DisplayValue": "1"
      },{"Value": 2,"DisplayValue": "2"
      },{"Value": 3,"DisplayValue": "3"
      },{"Value": 5,"DisplayValue": "5"
      },{"Value": 8,"DisplayValue": "8"
      }
    ],
    "ProcessorName": "Fibonacci Sequence"
  }
];
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
}
