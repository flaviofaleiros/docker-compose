// Compiled using marko@4.18.21 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/alura-docker$1.0.0/views/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Loja de Livros</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\"> <link href=\"css/estilos.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Alura Books</a></div></nav><div class=\"container page-wrap\"><div class=\"row\"> ");

  var $for$0 = 0;

  marko_forEach(data.books, function(book) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"col-md-3 col-sm-6 hero-feature text-center\"><div class=\"thumbnail\"><img" +
      marko_attr("src", "img/" + book.cover) +
      " alt=\"\"><div class=\"caption\"><h3>" +
      marko_escapeXml(book.name) +
      "</h3><p>" +
      marko_escapeXml(book.description) +
      "</p><p>" +
      marko_escapeXml(book.price) +
      "</p><p><a href=\"#\" class=\"btn btn-primary\">Comprar!</a><a href=\"#\" class=\"btn btn-default\">Detalhes</a></p></div></div></div>");
  });

  out.w(" </div> </div><footer class=\"site-footer\"><p>Todos os direitos reservados</p></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/alura-docker$1.0.0/views/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
