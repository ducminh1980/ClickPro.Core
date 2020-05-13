/*!
* DevExtreme (dx.messages.fr.js)
* Version: 19.2.4
* Build date: Tue Nov 19 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        fr: {
            Yes: "Oui",
            No: "Non",
            Cancel: "Annuler",
            Clear: "Vider",
            Done: "Termin\xe9",
            Loading: "Chargement...",
            Select: "S\xe9lection...",
            Search: "Recherche",
            Back: "Retour",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Pas de donn\xe9es",
            "dxDropDownEditor-selectLabel": "S\xe9lection",
            "validation-required": "Obligatoire",
            "validation-required-formatted": "{0} est obligatoire",
            "validation-numeric": "La valeur doit \xeatre un nombre",
            "validation-numeric-formatted": "{0} doit \xeatre un nombre",
            "validation-range": "La valeur ne se trouve pas dans la plage valide",
            "validation-range-formatted": "{0} ne se trouve pas dans la plage valide",
            "validation-stringLength": "La longueur de la valeur est incorrecte",
            "validation-stringLength-formatted": "La longueur de {0} est incorrecte",
            "validation-custom": "La valeur est invalide",
            "validation-custom-formatted": "{0} est invalide",
            "validation-async": "La valeur est invalide",
            "validation-async-formatted": "{0} est invalide",
            "validation-compare": "La valeur est inappropri\xe9e",
            "validation-compare-formatted": "{0} est inappropri\xe9e",
            "validation-pattern": "La valeur ne correspond pas au mod\xe8le",
            "validation-pattern-formatted": "{0} ne correspond pas au mod\xe8le",
            "validation-email": "L'adresse email est invalide",
            "validation-email-formatted": "{0} est invalide",
            "validation-mask": "La valeur est invalide",
            "dxLookup-searchPlaceholder": "Nombre minimum de caract\xe8res: {0}",
            "dxList-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxList-pulledDownText": "Relacher pour actualiser...",
            "dxList-refreshingText": "Actualisation...",
            "dxList-pageLoadingText": "Chargement...",
            "dxList-nextButtonText": "Suivant",
            "dxList-selectAll": "S\xe9lectionner tout",
            "dxListEditDecorator-delete": "Supprimer",
            "dxListEditDecorator-more": "Plus",
            "dxScrollView-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxScrollView-pulledDownText": "Relacher pour actualiser...",
            "dxScrollView-refreshingText": "Mise \xe0 jour...",
            "dxScrollView-reachBottomText": "Chargement...",
            "dxDateBox-simulatedDataPickerTitleTime": "Choisissez l'heure",
            "dxDateBox-simulatedDataPickerTitleDate": "Choisissez la date",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Choisissez la date et l'heure",
            "dxDateBox-validation-datetime": "La valeur doit \xeatre une date ou une heure.",
            "dxFileUploader-selectFile": "Choisissez un fichier",
            "dxFileUploader-dropFile": "Enlever fichier",
            "dxFileUploader-bytes": "Bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "T\xe9l\xe9charger",
            "dxFileUploader-uploaded": "T\xe9l\xe9charg\xe9",
            "dxFileUploader-readyToUpload": "Pret \xe0 t\xe9l\xe9charger",
            "dxFileUploader-uploadFailedMessage": "Echec du t\xe9l\xe9chargement",
            "dxFileUploader-invalidFileExtension": "Type de fichier non autoris\xe9",
            "dxFileUploader-invalidMaxFileSize": "Fichier trop volumineux",
            "dxFileUploader-invalidMinFileSize": "Fichier trop petit",
            "dxRangeSlider-ariaFrom": "De {0}",
            "dxRangeSlider-ariaTill": "\xe0 {0}",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "optionnel",
            "dxForm-requiredMessage": "{0} est obligatoire",
            "dxNumberBox-invalidValueMessage": "La valeur doit \xeatre un nombre",
            "dxNumberBox-noDataText": "Pas de donn\xe9es",
            "dxDataGrid-columnChooserTitle": "Choisir les colonnes",
            "dxDataGrid-columnChooserEmptyText": "Faites glisser une colonne ici pour la cacher",
            "dxDataGrid-groupContinuesMessage": "Suite \xe0 la page suivante",
            "dxDataGrid-groupContinuedMessage": "Suite de la page pr\xe9c\xe9dente",
            "dxDataGrid-groupHeaderText": "Grouper avec cette colonne",
            "dxDataGrid-ungroupHeaderText": "D\xe9grouper",
            "dxDataGrid-ungroupAllText": "D\xe9grouper tout",
            "dxDataGrid-editingEditRow": "Editer",
            "dxDataGrid-editingSaveRowChanges": "Sauvegarder",
            "dxDataGrid-editingCancelRowChanges": "Annuler",
            "dxDataGrid-editingDeleteRow": "Supprimer",
            "dxDataGrid-editingUndeleteRow": "Restaurer",
            "dxDataGrid-editingConfirmDeleteMessage": "\xcates-vous s\xfbr de vouloir supprimer cet \xe9l\xe9ment ?",
            "dxDataGrid-validationCancelChanges": "Annuler les changements",
            "dxDataGrid-groupPanelEmptyText": "Faites glisser une colonne ICI pour grouper par celle-ci",
            "dxDataGrid-noDataText": "Pas de donn\xe9es",
            "dxDataGrid-searchPanelPlaceholder": "Recherche...",
            "dxDataGrid-filterRowShowAllText": "(tous)",
            "dxDataGrid-filterRowResetOperationText": "R\xe9initialiser",
            "dxDataGrid-filterRowOperationEquals": "Egale",
            "dxDataGrid-filterRowOperationNotEquals": "Diff\xe9rent de",
            "dxDataGrid-filterRowOperationLess": "Plus petit",
            "dxDataGrid-filterRowOperationLessOrEquals": "Plus petit ou \xe9gal",
            "dxDataGrid-filterRowOperationGreater": "Plus grand",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Plus grand ou \xe9gal",
            "dxDataGrid-filterRowOperationStartsWith": "Commence par",
            "dxDataGrid-filterRowOperationContains": "Contient",
            "dxDataGrid-filterRowOperationNotContains": "Ne contient pas",
            "dxDataGrid-filterRowOperationEndsWith": "Termine par",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "D\xe9but",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrer le texte",
            "dxDataGrid-trueText": "Vrai",
            "dxDataGrid-falseText": "Faux",
            "dxDataGrid-sortingAscendingText": "Tri croissant",
            "dxDataGrid-sortingDescendingText": "Tri d\xe9croissant",
            "dxDataGrid-sortingClearText": "Supprimer le tri",
            "dxDataGrid-editingSaveAllChanges": "Sauvegarder les changements",
            "dxDataGrid-editingCancelAllChanges": "Ignorer les changements",
            "dxDataGrid-editingAddRow": "Ajouter ligne",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minimum de {1} est {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maximum de {1} est {0}",
            "dxDataGrid-summaryAvg": "Moy: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Moyenne de {1} est {0}",
            "dxDataGrid-summarySum": "Somme: {0}",
            "dxDataGrid-summarySumOtherColumn": "Somme de {1} est {0}",
            "dxDataGrid-summaryCount": "Total: {0}",
            "dxDataGrid-columnFixingFix": "Fixer",
            "dxDataGrid-columnFixingUnfix": "D\xe9tacher",
            "dxDataGrid-columnFixingLeftPosition": "A gauche",
            "dxDataGrid-columnFixingRightPosition": "A droite",
            "dxDataGrid-exportTo": "Exporter",
            "dxDataGrid-exportToExcel": "Exporter sous Excel",
            "dxDataGrid-excelFormat": "Fichier Excel",
            "dxDataGrid-selectedRows": "Lignes s\xe9lectionn\xe9es",
            "dxDataGrid-exportSelectedRows": "Exporter les lignes s\xe9lectionn\xe9es",
            "dxDataGrid-exportAll": "Exporter tout",
            "dxDataGrid-headerFilterEmptyValue": "(aucune valeur)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuler",
            "dxDataGrid-ariaColumn": "Colonne",
            "dxDataGrid-ariaValue": "Valeur",
            "dxDataGrid-ariaFilterCell": "Filtre de cellule",
            "dxDataGrid-ariaCollapse": "R\xe9duire",
            "dxDataGrid-ariaExpand": "Etendre",
            "dxDataGrid-ariaDataGrid": "Grille",
            "dxDataGrid-ariaSearchInGrid": "Rechercher dans la grille",
            "dxDataGrid-ariaSelectAll": "S\xe9lectionner tout",
            "dxDataGrid-ariaSelectRow": "S\xe9lectionner ligne",
            "dxDataGrid-filterBuilderPopupTitle": "Cr\xe9ation de filtre",
            "dxDataGrid-filterPanelCreateFilter": "Cr\xe9er un filtre",
            "dxDataGrid-filterPanelClearFilter": "Supprimer",
            "dxDataGrid-filterPanelFilterEnabledHint": "Activer le filtre",
            "dxTreeList-ariaTreeList": "Liste arborescente",
            "dxTreeList-editingAddRowToNode": "Ajouter",
            "dxPager-infoText": "Page {0} sur {1} ({2} \xe9lements)",
            "dxPager-pagesCountText": "sur",
            "dxPivotGrid-grandTotal": "Total g\xe9n\xe9ral",
            "dxPivotGrid-total": "Total {0}",
            "dxPivotGrid-fieldChooserTitle": "Liste des champs",
            "dxPivotGrid-showFieldChooser": "Afficher la liste des champs",
            "dxPivotGrid-expandAll": "Etendre tout",
            "dxPivotGrid-collapseAll": "R\xe9duire tout",
            "dxPivotGrid-sortColumnBySummary": 'Trier par colonne "{0}"',
            "dxPivotGrid-sortRowBySummary": 'Trier par ligne "{0}"',
            "dxPivotGrid-removeAllSorting": "Supprimer les tris",
            "dxPivotGrid-dataNotAvailable": "ND",
            "dxPivotGrid-rowFields": "Lignes",
            "dxPivotGrid-columnFields": "Colonnes",
            "dxPivotGrid-dataFields": "Valeurs",
            "dxPivotGrid-filterFields": "Filtres",
            "dxPivotGrid-allFields": "Tous les champs",
            "dxPivotGrid-columnFieldArea": "D\xe9poser les champs de colonne ici",
            "dxPivotGrid-dataFieldArea": "D\xe9poser les champs de donn\xe9es ici",
            "dxPivotGrid-rowFieldArea": "D\xe9poser les champs de ligne ici",
            "dxPivotGrid-filterFieldArea": "D\xe9poser les champs de filtre ici",
            "dxScheduler-editorLabelTitle": "Titre",
            "dxScheduler-editorLabelStartDate": "Date de d\xe9but",
            "dxScheduler-editorLabelEndDate": "Date de fin",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "R\xe9currence",
            "dxScheduler-openAppointment": "D\xe9finir un \xe9venement",
            "dxScheduler-recurrenceNever": "Jamais",
            "dxScheduler-recurrenceDaily": "Quotidien",
            "dxScheduler-recurrenceWeekly": "Hebdomadaire",
            "dxScheduler-recurrenceMonthly": "Mensuel",
            "dxScheduler-recurrenceYearly": "Annuel",
            "dxScheduler-recurrenceRepeatEvery": "Chaque",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Jusqu'\xe0",
            "dxScheduler-recurrenceAfter": "Apr\xe8s",
            "dxScheduler-recurrenceOn": "Le",
            "dxScheduler-recurrenceRepeatDaily": "Jour(s)",
            "dxScheduler-recurrenceRepeatWeekly": "Semaine(s)",
            "dxScheduler-recurrenceRepeatMonthly": "Mois(s)",
            "dxScheduler-recurrenceRepeatYearly": "Ann\xe9e(s)",
            "dxScheduler-switcherDay": "Jour",
            "dxScheduler-switcherWeek": "Semaine",
            "dxScheduler-switcherWorkWeek": "Semaine de travail",
            "dxScheduler-switcherMonth": "Mois",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Jour",
            "dxScheduler-switcherTimelineWeek": "Timeline Semaine",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Semaine de travail",
            "dxScheduler-switcherTimelineMonth": "Timeline Mois",
            "dxScheduler-recurrenceRepeatOnDate": "le",
            "dxScheduler-recurrenceRepeatCount": "occurence(s)",
            "dxScheduler-allDay": "Temps plein",
            "dxScheduler-confirmRecurrenceEditMessage": "Voulez-vous \xe9diter cet \xe9venement ou la s\xe9rie enti\xe8re ?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Voulez-vous supprimer cet \xe9venement ou la s\xe9rie enti\xe8re ?",
            "dxScheduler-confirmRecurrenceEditSeries": "Editer serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Supprimer serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Editer \xe9venement",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Supprimer \xe9venement",
            "dxScheduler-noTimezoneTitle": "Pas de fuseau horaire",
            "dxScheduler-moreAppointments": "{0} en plus",
            "dxCalendar-todayButtonText": "Aujourd'hui",
            "dxCalendar-ariaWidgetName": "Calendrier",
            "dxColorView-ariaRed": "Rouge",
            "dxColorView-ariaGreen": "Vert",
            "dxColorView-ariaBlue": "Bleu",
            "dxColorView-ariaAlpha": "Transparence",
            "dxColorView-ariaHex": "Code couleur",
            "dxTagBox-selected": "{0} selectionn\xe9s",
            "dxTagBox-allSelected": "Tous s\xe9lectionn\xe9s ({0})",
            "dxTagBox-moreSelected": "{0} en plus",
            "vizExport-printingButtonText": "Imprimer",
            "vizExport-titleMenuText": "Exporter/Imprimer",
            "vizExport-exportButtonText": "{0} fichier",
            "dxFilterBuilder-and": "Et",
            "dxFilterBuilder-or": "Ou",
            "dxFilterBuilder-notAnd": "Non Et",
            "dxFilterBuilder-notOr": "Non Ou",
            "dxFilterBuilder-addCondition": "Ajouter une condition",
            "dxFilterBuilder-addGroup": "Ajouter un groupe",
            "dxFilterBuilder-enterValueText": "<entrer une valeur>",
            "dxFilterBuilder-filterOperationEquals": "Est \xe9gal \xe0",
            "dxFilterBuilder-filterOperationNotEquals": "Est diff\xe9rent de",
            "dxFilterBuilder-filterOperationLess": "Est plus petit que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Est plus petit ou \xe9gal \xe0",
            "dxFilterBuilder-filterOperationGreater": "Est plus grand que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Est plus grand ou \xe9gal \xe0",
            "dxFilterBuilder-filterOperationStartsWith": "Commence par",
            "dxFilterBuilder-filterOperationContains": "Contient",
            "dxFilterBuilder-filterOperationNotContains": "Ne contient pas",
            "dxFilterBuilder-filterOperationEndsWith": "Finit par",
            "dxFilterBuilder-filterOperationIsBlank": "Est vide",
            "dxFilterBuilder-filterOperationIsNotBlank": "N'est pas vide",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Est parmi",
            "dxFilterBuilder-filterOperationNoneOf": "N'est pas parmi",
            "dxHtmlEditor-dialogColorCaption": "Changer couleur police",
            "dxHtmlEditor-dialogBackgroundCaption": "Changer couleur fond",
            "dxHtmlEditor-dialogLinkCaption": "Ajouter un hyperlien",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Texte",
            "dxHtmlEditor-dialogLinkTargetField": "Ouvrir le lien dans une nouvelle fen\xeatre",
            "dxHtmlEditor-dialogImageCaption": "Ajouter image",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Texte alternatif",
            "dxHtmlEditor-dialogImageWidthField": "Largeur (px)",
            "dxHtmlEditor-dialogImageHeightField": "Hauteur (px)",
            "dxHtmlEditor-heading": "Titre",
            "dxHtmlEditor-normalText": "Texte normal",
            "dxFileManager-newDirectoryName": "R\xe9pertoire sans titre",
            "dxFileManager-rootDirectoryName": "Fichiers",
            "dxFileManager-errorNoAccess": "Acc\xe8s interdit. L'op\xe9ration ne peut se terminer.",
            "dxFileManager-errorDirectoryExistsFormat": "R\xe9pertoire '{0}' existe d\xe9j\xe0.",
            "dxFileManager-errorFileExistsFormat": "Fichier '{0}' existe d\xe9j\xe0.",
            "dxFileManager-errorFileNotFoundFormat": "Impossible de trouver le fichier '{0}.'",
            "dxFileManager-errorDirectoryNotFoundFormat": "Impossible de trouver le r\xe9pertoire '{0}.'",
            "dxFileManager-errorWrongFileExtension": "Extension de fichier non permise.",
            "dxFileManager-errorMaxFileSizeExceeded": "Taille du fichier d\xe9passe la limite maximum permise.",
            "dxFileManager-errorInvalidSymbols": "Ce nom contient des caract\xe8res invalides.",
            "dxFileManager-errorDefault": "Erreur non sp\xe9cifi\xe9.",
            "dxFileManager-commandCreate": "Nouveau r\xe9pertoire",
            "dxFileManager-commandRename": "Renommer",
            "dxFileManager-commandMove": "D\xe9placer",
            "dxFileManager-commandCopy": "Copier",
            "dxFileManager-commandDelete": "Supprimer",
            "dxFileManager-commandDownload": "T\xe9l\xe9charger",
            "dxFileManager-commandUpload": "T\xe9l\xe9verser des fichiers",
            "dxFileManager-commandRefresh": "Rafra\xeechir",
            "dxFileManager-commandThumbnails": "Mode vignette",
            "dxFileManager-commandDetails": "Mode d\xe9tails",
            "dxFileManager-commandClear": "Vider s\xe9lection",
            "dxFileManager-dialogDirectoryChooserTitle": "S\xe9lectionner r\xe9pertoire de destination",
            "dxFileManager-dialogDirectoryChooserButtonText": "S\xe9lectionner",
            "dxFileManager-dialogRenameItemTitle": "Renommer",
            "dxFileManager-dialogRenameItemButtonText": "Sauvegarder",
            "dxFileManager-dialogCreateDirectoryTitle": "Nouveau r\xe9pertoire",
            "dxFileManager-dialogCreateDirectoryButtonText": "Cr\xe9er",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Cr\xe9er un r\xe9pertoire dans {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "R\xe9pertoire cr\xe9\xe9 dans {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "R\xe9pertoire n'est pas cr\xe9\xe9",
            "dxFileManager-editingCreateCommonErrorMessage": "R\xe9pertoire n'est pas cr\xe9\xe9",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Renommer un item dans {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Item renomm\xe9 dans {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Item non renomm\xe9",
            "dxFileManager-editingRenameCommonErrorMessage": "Item non renomm\xe9",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Supprimer un item de {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Supprimer {0} items de {1}",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Item supprim\xe9 de {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{0} items supprim\xe9s de {1}",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Item non suprim\xe9",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items non supprim\xe9s",
            "dxFileManager-editingDeleteCommonErrorMessage": "Des items ne sont pas supprim\xe9s",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "En train de d\xe9placer un item vers {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "En train de d\xe9placer {0} items vers {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Item d\xe9plac\xe9 vers {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} items d\xe9plac\xe9s vers {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Item non d\xe9plac\xe9",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items non d\xe9plac\xe9s",
            "dxFileManager-editingMoveCommonErrorMessage": "Des items ne sont pas d\xe9plac\xe9s",
            "dxFileManager-editingCopySingleItemProcessingMessage": "En train de copier un item vers {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "En train de copier {0} items vers {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Item copi\xe9 vers {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} items copi\xe9s vers {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Item non copi\xe9",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items non copi\xe9s",
            "dxFileManager-editingCopyCommonErrorMessage": "Des items ne sont pas copi\xe9s",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "En train de t\xe9l\xe9verser un item vers {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "En train de t\xe9l\xe9verser {0} items vers {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Item t\xe9l\xe9vers\xe9 vers {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} items t\xe9l\xe9vers\xe9s vers {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Item non t\xe9l\xe9vers\xe9",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items non t\xe9l\xe9vers\xe9s",
            "dxFileManager-editingUploadCanceledMessage": "Annul\xe9",
            "dxFileManager-listDetailsColumnCaptionName": "Nom",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Date modifi\xe9",
            "dxFileManager-listDetailsColumnCaptionFileSize": "Taille de fichier",
            "dxFileManager-listThumbnailsTooltipTextSize": "Taille",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Date modifi\xe9",
            "dxFileManager-notificationProgressPanelTitle": "En cours",
            "dxFileManager-notificationProgressPanelEmptyListText": "Aucune op\xe9ration",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Annul\xe9",
            "dxDiagram-categoryGeneral": "G\xe9n\xe9ral",
            "dxDiagram-categoryFlowchart": "Organigramme",
            "dxDiagram-categoryOrgChart": "Structure organisationnelle",
            "dxDiagram-categoryContainers": "Conteneurs",
            "dxDiagram-categoryCustom": "Personnalis\xe9",
            "dxDiagram-commandProperties": "Propri\xe9t\xe9s",
            "dxDiagram-commandExport": "Exporter",
            "dxDiagram-commandExportToSvg": "Exporter en SVG",
            "dxDiagram-commandExportToPng": "Exporter en PNG",
            "dxDiagram-commandExportToJpg": "Exporter en JPEG",
            "dxDiagram-commandUndo": "Annuler",
            "dxDiagram-commandRedo": "Refaire",
            "dxDiagram-commandFontName": "Nom de la police",
            "dxDiagram-commandFontSize": "Taille de la police",
            "dxDiagram-commandBold": "Gras",
            "dxDiagram-commandItalic": "Italique",
            "dxDiagram-commandUnderline": "Souligner",
            "dxDiagram-commandTextColor": "Couleur texte",
            "dxDiagram-commandLineColor": "Couleur ligne",
            "dxDiagram-commandFillColor": "Couleur remplissage",
            "dxDiagram-commandAlignLeft": "Aligner \xe0 gauche",
            "dxDiagram-commandAlignCenter": "Centrer",
            "dxDiagram-commandAlignRight": "Aligner \xe0 droite",
            "dxDiagram-commandConnectorLineType": "Type de ligne de connexion",
            "dxDiagram-commandConnectorLineStraight": "Droit",
            "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
            "dxDiagram-commandConnectorLineStart": "D\xe9but de la ligne de connexion",
            "dxDiagram-commandConnectorLineEnd": "Fin de la ligne de connexion",
            "dxDiagram-commandConnectorLineNone": "Aucun",
            "dxDiagram-commandConnectorLineArrow": "Fl\xe8che",
            "dxDiagram-commandAutoLayout": "Mise en page automatique",
            "dxDiagram-commandAutoLayoutTree": "Arbre",
            "dxDiagram-commandAutoLayoutLayered": "Par couches",
            "dxDiagram-commandAutoLayoutHorizontal": "Horizontal",
            "dxDiagram-commandAutoLayoutVertical": "Vertical",
            "dxDiagram-commandFullscreen": "Plein \xe9cran",
            "dxDiagram-commandUnits": "Unit\xe9s",
            "dxDiagram-commandPageSize": "Taille de la page",
            "dxDiagram-commandPageOrientation": "Orientation de la page",
            "dxDiagram-commandPageOrientationLandscape": "Paysage",
            "dxDiagram-commandPageOrientationPortrait": "Portrait",
            "dxDiagram-commandPageColor": "Couleur de la page",
            "dxDiagram-commandShowGrid": "Afficher la grille",
            "dxDiagram-commandSnapToGrid": "Aligner sur la grille",
            "dxDiagram-commandGridSize": "Taille de la grille",
            "dxDiagram-commandZoomLevel": "Niveau de zoom",
            "dxDiagram-commandAutoZoom": "Zoom automatique",
            "dxDiagram-commandSimpleView": "Vue simple",
            "dxDiagram-commandCut": "Couper",
            "dxDiagram-commandCopy": "Copier",
            "dxDiagram-commandPaste": "Coller",
            "dxDiagram-commandSelectAll": "Tout s\xe9lectionner",
            "dxDiagram-commandDelete": "Supprimer",
            "dxDiagram-commandBringToFront": "Amener au premier plan",
            "dxDiagram-commandSendToBack": "Envoyer \xe0 l'arri\xe8re",
            "dxDiagram-commandLock": "Verrouiller",
            "dxDiagram-commandUnlock": "D\xe9verrouiller",
            "dxDiagram-commandInsertShapeImage": "Ins\xe9rer une image...",
            "dxDiagram-commandEditShapeImage": "Changer image...",
            "dxDiagram-commandDeleteShapeImage": "Supprimer image",
            "dxDiagram-unitIn": "po",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Annuler",
            "dxDiagram-dialogInsertShapeImageTitle": "Ins\xe9rer une image",
            "dxDiagram-dialogEditShapeImageTitle": "Changer image",
            "dxDiagram-dialogEditShapeImageSelectButton": "S\xe9lectionner une image",
            "dxDiagram-dialogEditShapeImageLabelText": "ou d\xe9poser le fichier ici"
        }
    })
});
