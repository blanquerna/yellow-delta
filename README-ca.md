# yellow-delta v1
Theme for Datenstrom-Yellow 0.8.3

Basat en el gran treball de disseny de l'equip de Datenstrom i Martin Blomgren amb el seu tema [Clarity](https://github.com/zenblom/yellow-clarity)

## Instal·lació manual del tema
* Descarrega el tema i descomprimeix el fitxer zip.  
* Obre el fitxer extension.ini  
* Copia els arxius a les respective ubicacions indicades a extension.ini: `system/extensions` - `system/themes` - `system-layout`  
* Adapta el tema  
* Canvia el tema per defecte a `system/extensions/yellow-system.ini  
 
## HTML semàntic
S'ha redefinit l'estructura de les pàgines seguin amb l'esquema i elements d'etiquetes d'acord amb el model

<p align="center"><img src="semantic-html-structure-h.png?raw=true" alt="Captura de pantalla" width="350">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<img src="semantic-html-structure-v.png?raw=true" alt="Captura de pantalla" width="350"></p>

Totes les opcions bàsiques de disseny són a l'arxiu **delta.css**. 

Per defecte és la que correspondria a la primera imatge, amb barra de menú horitzontal. En les pàgines amb scroll queda fixada al principi de la pàgina; perquè es desplaci conjuntement amb la pàgina s'ha de modificar a *delta.css* l'element *nav* amb la propietat `position: absolute;`. Per deixar com a actiu la barra de navegació vertical és suficient renombrar els arxius *delta.css* com a *delta-old.css* i l'arxiu *delta-vertical.css* com a *delta.css*.

El peu de pàgina és al bloc *footer*; en les pàgines sense scroll es reposiciona al peu de la finestra amb una funció js.

## Del títol del blog i de les mencions de responsabilitat
La opció de Danestrom-Yellow per a la pàgina principal és que es correspongui amb el primer directori de `content` (per defecte _1-home_) i obri l'arxiu per defecte `page.md`. Posar una entrada amb el nom del bloc direccionada al mateix punt de la primera entrada del menú resultaria redundant, per la qual cosa no es mostra el _títol del bloc_ sino que el nom del bloc s'assigna al títol d'aquesta primera pàgina `1-home/page.md`.

Per indicar la titularitat de la pàgina s'ha de modificar a _layouts/delta-footer.html_.

## Del disseny _responsive_ de la pàgina
L'amplada dels elements de la pàgina s'adapten a l'amplada de la finestra. Quan le finestra és inferior a 960px els marges queden reduïts i si hi hagués un marc amb l'etiqueta `aside` deixaria de ser flotant i passaría al peu el `main`. 
En un tamany de finestra encara més reduít les opcions de xarxes socials no serien visibles.

Per a la impressió del contingut de la pàgina sols s'imprimiran _el logo i el títol de la pàgina, el contingut del main i la menció del copyright_. 

## De la platilla per defecte de les pàgines

La plantilla de pàgina per defecte, _delta-default.html_, contempla una sola columna, sense indicació del titol de la pàgina indicat a `Title`. Tota la visualització s'ha d'indicar al cos de la pàgina, inclosos títols, subtitols, textos, imatges,...

<p align="center"><img src="page-init.png?raw=true" alt="Captura de pantalla" width="350" style="border:#333 1px solid">
<img src="page-init-v.png?raw=true" alt="Captura de pantalla" width="350" style="border:#333 1px solid"></p>

Per controlar la visualització de les pàgines al menú s'ha d'utilitzar l'entrada **Status** de la capçalera de la pàgina. Amb el valor `Status: unlisted` la pàgina no seria visible des del menú, però seria accessible amb un enllaç.

Per afegir un marc de _sidebar_ és suficient crear a continuació del bloc `main` de la planilla, un bloc amb l'etiqueta `aside` amb el contingut desitjat; es crearà automàticamentes flotant i amb el tamany en que s'ha creat el de la plantilla _blog_.
 
## De la plantilla de blog
Contempla dues columnes, una principal ('`main`') per a les entrades i una segona com a _sidebar_, amb informació d'autors, etiquetes de les entrades,...

Hi ha un conjunt de tires de texte usades habitualment a blogs que encara no s'han incorporat a la internacionalització. Mentre, vegeu [com afegir aquestes entrades a l'arxiu de configuració](#language-adds).

Perquè la columna del _sidebar_ no apareixi és suficient que a cada una de les dues plantilles de _blog_ s'elimini la cridada a _delta-blog-sidebar.html_
Hi ha dues plantilles bàsiques de blog. 

#### Plantilla d'índex d'entrada al blog i selecció d'entrades 
La primera és  `delta-blog-start.html` que genera dos tipus de sortida:

* Entrada al bloc amb visualització de les darreres entrades
* Visualització de les entrades objecte de cerca per etiqueta o autor

<p align="center"><img src="page-blog-all.png?raw=true" alt="Captura de pantalla" width="350" style="border:#333 1px solid">
<img src="page-blog-tag.png?raw=true" alt="Captura de pantalla" width="350" style="border:#333 1px solid"></p>

A les entrades convé després d'unes frases posar la etiqueta `[--more--]` perquè en aquestes pàgines de resum sols es mostri una primera part.

A aquestes relacións d'entrades no es mostra l'opció de compartir de cada entrada ni les etiquetes que li corresponen.

A la columna sidebar es mostra l'entrada escapçada de l'apartat `9-about`, les 'entrades recents', 'Etiquetes' usades i 'Autors' amb indicació de número d'aparicions. Aquesta columna íntegra es genera amb la plantilla `delta-blog-sidebar.html`

Al bloc `main`, en el cas de mostrar la cerca per etiquetes o autors apareixerà al títol de l'apartat una icona amb la categoria corresponent (etiqueta o autor) i l'ítem de cerca.


#### Plantilla de detall d'entrada de blog
La plantilla `delta-blog.html` genera la sortida de _visualització d'una entrada_. Inclou el títol de l'entrada, l'autor, data de publicació i les xarxes socials on compartir l'entrada, el cos de l'entrada i les seves etiquetes.

<p align="center"><img src="page-bloc entry.png?raw=true" alt="Captura de pantalla" width="350" style="border:#333 1px solid"></p>

La referència a l'autor inclou una icona genèrica d'autor que es pot canviar per una personalitzada de l'autor amb la seva imatge, com es preveu a la plantilla _delta-blog.html_. La imatge ha de tenir el nom de la'autor sense espais amb l'extensió `.png` a la carpeta `media/thumbnails/`.

L'entrada de _Compartir amb_ inclou 3 xarxes socials i copiar l'enllaç.

El peu de l'entrada inclou les etiquetes assignades.

## De les xarxes socials

La plantilla de generació del menú _delta-navigation.html_  inclou una cridada a la plantilla _delta-socialmedia.html_ de xarxes socials i que s'inclouen a la barra del menú ala dreta amb icones. S'ha d'actualitzar les referencies de cada xarxa social amb els hashtags corresponents. Sols s'han d'incloure aquelles referències ones té presència.

La plantilla _delta-blog.html_ inclou per a cada entrada l'opció de compartir amb xarxes socials amb la plantilla _delta-blog-share.html_. A aquesta plantilla s'ha preparat per a compartir amb facebook, twitter i linkedin, així com copiar l'enllaç de la pàgina. 

## Del js : _rho.js_
És un script mínim amb dues úniques funcions:
* Desplaçar el bloc de `footer`al peu de la finestra si la pàgina no la cobreix tota.
* Mostrar un botó 'goTop' que ha de permetre desplaçar-se al principi de la pàgina.

<a name="language-adds"></a>   
## Ús d'etiquetes de text usuals a les pàgines de blog.
Per fer ús de les funcions de l'API convé afegir les entrades a `system/extensions/yellow-language.ini`:

> BlogShare: Compartir amb  
BlogRecent: Entrades recents  
BlogAuthors: Autors  
BlogTags: Etiquetes  
BlogYear: Any  
BlogAuthor: Autor  
BlogTag: Etiqueta  

Alternativament apareixeran etiquetes i s'hauran de substituïr en les respectives pàgines del directori `system/layouts`

## Més informació

Més informació a [Datenstrom Yellow Help ](https://datenstrom.se/yellow/help/) i especialment a [Datenstrom Yellow API ](https://datenstrom.se/yellow/help/api-for-developers)
