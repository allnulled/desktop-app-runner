
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>Castelog OS</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/calo/castelog.parser.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <style>\n      /********************************/\n      html, body {\n        margin: 0;\n        padding: 0;\n      }\n      h5 {\n        background-color: #222;\n        color: white;\n        padding: 8px;\n        margin: 0px;\n        border-bottom: 1px solid #FFF;\n      }\n\n      /********************************/\n      #consola_de_castelog .CodeMirror {\n        font-size: 10px;\n        background-color: #111;\n        color: #0F0;\n        border: 1px solid #111;\n      }\n      #consola_de_castelog .CodeMirror .CodeMirror-gutters {\n        background-color: #333;\n      }\n      #consola_de_castelog .CodeMirror-cursor {\n        border-left: 1px solid yellow;\n      }\n\n      /********************************/\n      #consola_de_salida .CodeMirror {\n        font-size: 10px;\n        background-color: #000;\n        color: #FF0;\n        border: 1px solid #111;\n      }\n      #consola_de_salida .CodeMirror .CodeMirror-gutters {\n        background-color: #333;\n      }\n      #consola_de_salida .CodeMirror-cursor {\n        border-left: 1px solid yellow;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>Consola</h5>"
 + "    <div id=\"consola_de_castelog\">"
 + "      <textarea ref=\"consola_de_castelog\"></textarea>"
 + "    </div>"
 + "    <table>"
 + "      <tr>"
 + "        <td style=\"width: 100%;\">"
 + "          <button style=\"width: 100%;\" v-on:click=\"() => ejecutar_codigo_castelog()\">Ejecutar</button>"
 + "        </td>"
 + "        <td style=\"width: 1%;\">"
 + "          <button v-on:click=\"() => guardar_codigo_castelog()\">Guardar</button>"
 + "        </td>"
 + "      </tr>"
 + "    </table>"
 + "    <div id=\"consola_de_salida\">"
 + "      <textarea ref=\"consola_de_salida\"></textarea>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:Object,
required:true
},
data() {try {
return { consola_entrada_codemirror:undefined,
consola_salida_codemirror:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ejecutar_codigo_castelog() {try {
const codigo_castelog = this.consola_entrada_codemirror.getValue(  );
const codigo_js = this.$window.Castelog_parser.parse( codigo_castelog );
const resultado = (await this.$window.eval( "(async () => {const __dirname = process.cwd();" + codigo_js + "})()" ));
const resultado_json = JSON.stringify( resultado,
null,
4 );
this.consola_salida_codemirror.setValue( resultado_json );
} catch(error) {
this.root.gestionar_error( error );}
},
async guardar_codigo_castelog() {
}
},
mounted() {try {
this.consola_entrada_codemirror = CodeMirror.fromTextArea( this.$refs.consola_de_castelog,
{ lineNumbers:true
} );
this.consola_salida_codemirror = CodeMirror.fromTextArea( this.$refs.consola_de_salida,
{ lineNumbers:true
} );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "    <div v-if=\"error\">"
 + "      <div>Nombre: {{ error.name }}</div>"
 + "      <div>Mensaje: {{ error.message }}</div>"
 + "      <div>Pila: {{ error.stack }}</div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { data() {try {
return { error_id:undefined,
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async mostrar_error( error,
tiempo = 10 * 1000 ) {try {
this.error = error;
this.$forceUpdate( true );
clearTimeout( this.error_id );
this.error_id = setTimeout( () => {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
tiempo );
} catch(error) {
console.log(error);
throw error;
}

},
async gestionar_error( error ) {try {
console.log(error);
this.mostrar_error( error,
10 * 1000 );
} catch(error) {
console.log(error);}
}
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