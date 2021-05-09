# PruebasE2E
PruebasE2E

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
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> it('Create Tag') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> create_integration.feature &nbsp;</td>
<td>Consiste en crear una Tag en Ghost para hacer uso en los post o pages. &nbsp;</td>
</tr>
<tr>
<td>Modificar un Tag &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> it('Update Tag')  &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> edit_tag.feature &nbsp;</td>
<td>Consiste crear y posteriormente modificar el tag existente en Ghost. &nbsp;</td>
</tr>
<tr>
<td>Eliminar un Tag &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >>  it('Delete Tag') &nbsp;</td>
<td>Kraken >> KrakenMobile-1.0.9 >> proyecto5 >> features >> delete_tag.feature &nbsp;</td>
<td>Consiste en crear y posteriormente eliminar el tag existente en Ghost &nbsp;</td>
</tr>
<tr>
<td>Crear Tag Interno &nbsp;</td>
<td>Cypress >> cypress >> integration >> escenariosluis.spec.ts >> it('Create Internal Tag') &nbsp;</td>
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
<td>... &nbsp;</td>
<td>... &nbsp;</td>
<td>... &nbsp;</td>
</tr>
<tr>
<td>Modificar Post &nbsp;</td>
<td>... &nbsp;</td>
<td>... &nbsp;</td>
<td>... &nbsp;</td>
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



