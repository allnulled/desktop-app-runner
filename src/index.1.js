
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>App | Sample 1</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <style>\n      \n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>App | Sample 1</h5>"
 + "    <ul>"
 + "      <li v-for=\"file, file_index in files\" v-bind:key=\"'file-' + file_index\">"
 + "        {{ file }}"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { data() {try {
return { files:require( "fs" ).readdirSync( "." )
};
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <router-view></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"Home",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");