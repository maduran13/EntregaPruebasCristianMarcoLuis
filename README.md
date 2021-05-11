# PruebasE2E

**Wiki Info**:

[Cuadro de pros/contras de herramientas de automatización E2E Usados](https://github.com/maduran13/PruebasE2E/wiki)

## Instrucciones de ejecución:


### Cypress:
 - Para ejeuctar las pruebas e2e de cypress se debe copiar el archivo **BaseDatosPrueba/ghost-local.db** y reemplazarlo en el entorno local donde se ejecutará **Ghost**. Es decir, la carpeta **Content/Data/**
 - Dirigirse al folder Cypress/cypress y ejecutar el siguiente comando:

    ```sh
    cypress open 
    ```
- Se abrirá la interface de cypress y se podran ejecutar de forma independiente las funcionalidades de cada ing automatizador por **/integrations/{{archivo}}/spec.js**

### Kraken
- Para ejecutar las pruebas e2e de Kraken se debe dirigit al path: **Kraken/KrakenMobile-1.0.9/proyecto5/features/** allí se encuentran los archivos .feature donde se automatizan los escenarios de prueba.
- Ejecutar el siguiente comando:
    ```sh
    bundle exec krkaen-mobile run 
    ```
    
### Escenarios de pruebas por funcionalidad:

<table>
<tbody>
<tr>
	Integraciones
</tr>
<tr>
<td><strong>Escenario</strong>&nbsp;</td>
<td><strong>Archivo Cypress</strong>&nbsp;</td>
<td><strong>Archivo Kraken</strong>&nbsp;</td>
<td><strong>Explicación</strong>&nbsp;</td>
</tr>
<tr>
<td>Integración	Crear integracion Custom &nbsp;</td>
<td>Cypress >> cypress >> integration >> ghost_integrations.spec.ts >>  function create_integration &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> create_tag.feature &nbsp;</td>
<td>Consiste en crear una Integración Custom en la sección de integraciones de Ghost. &nbsp;</td>
</tr>
<tr>
<td>Modificar Integracion Custom &nbsp;</td>
<td>Cypress >> cypress >> integration >> ghost_integrations.spec.ts >> function opened_edit_integration &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> edit_integration.feature &nbsp;</td>
<td>Consiste en modificar una integración custom ya existente en Ghost. &nbsp;</td>
</tr>
<tr>
<td>Agregar Webhook a Integracion Custom &nbsp;</td>
<td>Cypress >> cypress >> integration >> ghost_integrations.spec.ts >> function add_webhook &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> add_webhook.feature &nbsp;</td>
<td>Consiste en agregar un webhook que servirá para la integración custom ya creada en Ghost. &nbsp;</td>
</tr>
<tr>
<td>Editar Webhook &nbsp;</td>
<td>Cypress >> cypress >> integration >> ghost_integrations.spec.ts >> function edit_webhook &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> edit_webhook.feature &nbsp;</td>
<td>Consiste en editar un webhook que ya existe en Ghost. En kraken, se edita el nombre, en cypress se edita la URL. &nbsp;</td>
</tr>
<tr>
<td>Borrar Integracion Custom &nbsp;</td>
<td>Cypress >> cypress >> integration >> ghost_integrations.spec.ts >> function delete_integration &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> delete_integration.feature &nbsp;</td>
<td>Consiste en eliminar un webhook previamente creada en Ghost. &nbsp;</td>
</tr>
</tbody></table>


<table>
<tbody>
<tr>
	Tags
</tr>
<tr>
<td><strong>Escenario</strong>&nbsp;</td>
<td><strong>Archivo Cypress</strong>&nbsp;</td>
<td><strong>Archivo Kraken</strong>&nbsp;</td>
<td><strong>Explicación</strong>&nbsp;</td>
</tr>
<tr>
<td>Crear Tag &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> describe('Create Tag') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> create_integration.feature &nbsp;</td>
<td>Consiste en crear una Tag en Ghost para hacer uso en los post o pages. &nbsp;</td>
</tr>
<tr>
<td>Modificar un Tag &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> describe('Update Tag')  &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> edit_tag.feature &nbsp;</td>
<td>Consiste crear y posteriormente modificar el tag existente en Ghost. &nbsp;</td>
</tr>
<tr>
<td>Eliminar un Tag &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >>  describe('Delete Tag') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> delete_tag.feature &nbsp;</td>
<td>Consiste en crear y posteriormente eliminar el tag existente en Ghost &nbsp;</td>
</tr>
<tr>
<td>Crear Tag Interno &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> describe('Create Internal Tag') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> create_internal_tag.feature &nbsp;</td>
<td>Consiste en crear un tag interno en Ghost para hacer uso en los post o pages &nbsp;</td>
</tr>
</tbody></table>

<table>
<tbody>
<tr>
	Posts
</tr>
<tr>
<td><strong>Escenario</strong>&nbsp;</td>
<td><strong>Archivo Cypress</strong>&nbsp;</td>
<td><strong>Archivo Kraken</strong>&nbsp;</td>
<td><strong>Explicación</strong>&nbsp;</td>
</tr>
<tr>
<td>Crear Post &nbsp;</td>
<td> Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('Crear Post) describe('Validar Post') &nbsp;</td>
<td> Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> crear_post.feature &nbsp;</td>
<td> Se autentica y posteriormente crear y nos muestra el post. &nbsp;</td>
</tr>
<tr>
<td>Modificar Post &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('Modificar Post)&nbsp;</td>
<td>.Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> modificar_post.feature &nbsp;</td>
<td>Se autentica y posteriormente modifica el nombre de un post &nbsp;</td>
</tr>
<tr>
<tr>
<td>Eliminar Post &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> it('Delete a Post') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> eliminar_post.feature</td>
<td>Consiste crear un post y posteriormente eliminararlo en Ghost</td>
</tr>
<tr>
</tbody></table>

<table>
<tbody>
<tr>
	Members
</tr>
<tr>
<td><strong>Escenario</strong>&nbsp;</td>
<td><strong>Archivo Cypress</strong>&nbsp;</td>
<td><strong>Archivo Kraken</strong>&nbsp;</td>
<td><strong>Explicación</strong>&nbsp;</td>
</tr>
<tr>
<td>Crear Miembro &nbsp;</td>
<td> Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('Crear Miembro) describe('Validar Creación miembro') &nbsp;</td>
<td> Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> crear_miembro.feature &nbsp;</td>
<td> Se autentica y posteriormente crear y nos muestra el miembro. &nbsp;</td>
</tr>
<tr>
<td>Modificar Miembro &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('Modificar Miembro') describe('Validar modificación miembro') &nbsp;</td>
<td>.Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> modificar_miembro.feature &nbsp;</td>
<td>Se autentica y posteriormente modifica el nombre de un miembro &nbsp;</td>
</tr>
<tr>
<tr>
<td>Eliminar Miembro &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('borrar miembro') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> zeliminar_miembro.feature</td>
<td>Se autentica luego crea un miembro y posteriormente lo elimina. </td>
</tr>
<tr>
</tbody></table>

<table>
<tbody>
<tr>
	Pages
</tr>
<tr>
<td><strong>Escenario</strong>&nbsp;</td>
<td><strong>Archivo Cypress</strong>&nbsp;</td>
<td><strong>Archivo Kraken</strong>&nbsp;</td>
<td><strong>Explicación</strong>&nbsp;</td>
</tr>
<tr>
<td>Crear Página &nbsp;</td>
<td> Cypress >> cypress >> integration >> escenariosluis.spec.ts >> describe('Create Page) &nbsp;</td>
<td> Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> ...... &nbsp;</td>
<td> Consisnte en crear una página para el blog. &nbsp;</td>
</tr>
<tr>
<td>Editar Página &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenarioscristian.spec.ts >>  describe('Update Page) &nbsp;</td>
<td>.Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> ...... &nbsp;</td>
<td> Consisnte en crear una página y realziarle una modificación &nbsp;</td>
</tr>
<tr>
<tr>
<td>Eliminar Página &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('Delete miembro') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> .... </td>
<td>Consiste en crear una página y posteriormente eliminarla. </td>
</tr>
<tr>
</tbody></table>


<table>
<tbody>
<tr>
	Schedule Post
</tr>
<tr>
<td><strong>Escenario</strong>&nbsp;</td>
<td><strong>Archivo Cypress</strong>&nbsp;</td>
<td><strong>Archivo Kraken</strong>&nbsp;</td>
<td><strong>Explicación</strong>&nbsp;</td>
</tr>
<tr>
<td>Programar Post &nbsp;</td>
<td> Cypress >> cypress >> integration >> escenariosluis.spec.ts >> describe('Create a Schedule Post) &nbsp;</td>
<td> Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> ....... &nbsp;</td>
<td> Consinte en crear un post de forma programada para su publicación &nbsp;</td>
</tr>
<tr>
<td>Modificar Programación de un Post &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenarioscristian.spec.ts >> describe('Update a Schedule Post') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> ...... </td>
<td>Consinte en hacer la modificación de de fecha de programación de un post existente para su publciación </td>
</tr>
<tr>
</tbody></table>



