import { createTranslationResource } from '@backstage/core-plugin-api/alpha';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';

export const catalogMessages = createTranslationResource({
  ref: catalogTranslationRef,
  translations: {
    en: () =>
      Promise.resolve({
        default: {
          'indexPage.title': `Catalogue`,
          'indexPage.createButtonTitle': 'Create',
          'indexPage.supportButtonContent':
            'All your software catalog entities',
          'aboutCard.title': 'About',
          'aboutCard.refreshButtonTitle': 'Schedule entity refresh',
          'aboutCard.editButtonTitle': 'Edit Metadata',
          'aboutCard.createSimilarButtonTitle': 'Create something similar',
          'aboutCard.refreshScheduledMessage': 'Refresh scheduled',
          'aboutCard.launchTemplate': 'Launch Template',
          'aboutCard.viewTechdocs': 'View TechDocs',
          'aboutCard.viewSource': 'View Source',
          'aboutCard.descriptionField.label': 'Description',
          'aboutCard.descriptionField.value': 'No description',
          'aboutCard.ownerField.label': 'Owner',
          'aboutCard.ownerField.value': 'No Owner',
          'aboutCard.domainField.label': 'Domain',
          'aboutCard.domainField.value': 'No Domain',
          'aboutCard.systemField.label': 'System',
          'aboutCard.systemField.value': 'No System',
          'aboutCard.parentComponentField.label': 'Parent Component',
          'aboutCard.parentComponentField.value': 'No Parent Component',
          'aboutCard.typeField.label': 'Type',
          'aboutCard.lifecycleField.label': 'Lifecycle',
          'aboutCard.tagsField.label': 'Tags',
          'aboutCard.tagsField.value': 'No Tags',
          'aboutCard.targetsField.label': 'Targets',
          'searchResultItem.lifecycle': 'Lifecycle',
          'searchResultItem.Owner': 'Owner',
          'catalogTable.warningPanelTitle': 'Could not fetch catalog entities.',
          'catalogTable.viewActionTitle': 'View',
          'catalogTable.editActionTitle': 'Edit',
          'catalogTable.starActionTitle': 'Add to favorites',
          'catalogTable.unStarActionTitle': 'Remove from favorites',
          'dependencyOfComponentsCard.title': 'Dependency of components',
          'dependencyOfComponentsCard.emptyMessage':
            'No component depends on this component',
          'dependsOnComponentsCard.title': 'Depends on components',
          'dependsOnComponentsCard.emptyMessage':
            'No component is a dependency of this component',
          'dependsOnResourcesCard.title': 'Depends on resources',
          'dependsOnResourcesCard.emptyMessage':
            'No resource is a dependency of this component',
          'entityContextMenu.copiedMessage': 'Copied!',
          'entityContextMenu.moreButtonTitle': 'More',
          'entityContextMenu.inspectMenuTitle': 'Inspect entity',
          'entityContextMenu.copyURLMenuTitle': 'Copy entity URL',
          'entityContextMenu.unregisterMenuTitle': 'Unregister entity',
          'entityLabelsCard.title': 'Labels',
          'entityLabelsCard.emptyDescription':
            'No labels defined for this entity. You can add labels to your entity YAML as shown in the highlighted example below:',
          'entityLabelsCard.readMoreButtonTitle': 'Read more',
          'entityLabels.warningPanelTitle': 'Entity not found',
          'entityLabels.ownerLabel': 'Owner',
          'entityLabels.lifecycleLabel': 'Lifecycle',
          'entityLinksCard.title': 'Links',
          'entityLinksCard.emptyDescription':
            'No links defined for this entity. You can add links to your entity YAML as shown in the highlighted example below:',
          'entityLinksCard.readMoreButtonTitle': 'Read more',
          'entityNotFound.title': 'Entity was not found',
          'entityNotFound.description':
            'Want to help us build this? Check out our Getting Started documentation.',
          'entityNotFound.docButtonTitle': 'DOCS',
          'deleteEntity.dialogTitle':
            'Are you sure you want to delete this entity?',
          'deleteEntity.deleteButtonTitle': 'Delete',
          'deleteEntity.cancelButtonTitle': 'Cancel',
          'deleteEntity.description':
            'This entity is not referenced by any location and is therefore not receiving updates. Click here to delete.',
          entityProcessingErrorsDescription: 'The error below originates from',
          entityRelationWarningDescription:
            "This entity has relations to other entities, which can't be found in the catalog.\n Entities not found are: ",
          'hasComponentsCard.title': 'Has components',
          'hasComponentsCard.emptyMessage':
            'No component is part of this system',
          'hasResourcesCard.title': 'Has resources',
          'hasResourcesCard.emptyMessage': 'No resource is part of this system',
          'hasSubcomponentsCard.title': 'Has subcomponents',
          'hasSubcomponentsCard.emptyMessage':
            'No subcomponent is part of this component',
          'hasSystemsCard.title': 'Has systems',
          'hasSystemsCard.emptyMessage': 'No system is part of this domain',
          'relatedEntitiesCard.emptyHelpLinkTitle': 'Learn how to change this.',
          'systemDiagramCard.title': 'System Diagram',
          'systemDiagramCard.description':
            'Use pinch & zoom to move around the diagram.',
          'systemDiagramCard.edgeLabels.partOf': 'part of',
          'systemDiagramCard.edgeLabels.provides': 'provides',
          'systemDiagramCard.edgeLabels.dependsOn': 'depends on',
        },
      }),
    fr: () =>
      Promise.resolve({
        default: {
          'indexPage.title': 'Catalogue de {{orgName}}',
          'indexPage.createButtonTitle': 'Créer',
          'indexPage.supportButtonContent':
            'Tous vos entités de catalogue de logiciels',
          'aboutCard.title': 'À propos',
          'aboutCard.refreshButtonTitle':
            "Planifier l'actualisation de l'entité",
          'aboutCard.editButtonTitle': 'Modifier les métadonnées',
          'aboutCard.createSimilarButtonTitle':
            'Créer quelque chose de similaire',
          'aboutCard.refreshScheduledMessage': 'Actualisation planifiée',
          'aboutCard.launchTemplate': 'Lancer le modèle',
          'aboutCard.viewTechdocs': 'Voir TechDocs',
          'aboutCard.viewSource': 'Voir la source',
          'aboutCard.descriptionField.label': 'Description',
          'aboutCard.descriptionField.value': 'Pas de description',
          'aboutCard.ownerField.label': 'Propriétaire',
          'aboutCard.ownerField.value': 'Pas de propriétaire',
          'aboutCard.domainField.label': 'Domaine',
          'aboutCard.domainField.value': 'Pas de domaine',
          'aboutCard.systemField.label': 'Système',
          'aboutCard.systemField.value': 'Pas de système',
          'aboutCard.parentComponentField.label': 'Composant parent',
          'aboutCard.parentComponentField.value': 'Pas de composant parent',
          'aboutCard.typeField.label': 'Type',
          'aboutCard.lifecycleField.label': 'Cycle de vie',
          'aboutCard.tagsField.label': 'Étiquettes',
          'aboutCard.tagsField.value': "Pas d'étiquettes",
          'aboutCard.targetsField.label': 'Cibles',
          'searchResultItem.lifecycle': 'Cycle de vie',
          'searchResultItem.Owner': 'Propriétaire',
          'catalogTable.warningPanelTitle':
            'Impossible de récupérer les entités du catalogue.',
          'catalogTable.viewActionTitle': 'Voir',
          'catalogTable.editActionTitle': 'Modifier',
          'catalogTable.starActionTitle': 'Ajouter aux favoris',
          'catalogTable.unStarActionTitle': 'Retirer des favoris',
          'dependencyOfComponentsCard.title': 'Dépendance des composants',
          'dependencyOfComponentsCard.emptyMessage':
            'Aucun composant ne dépend de ce composant',
          'dependsOnComponentsCard.title': 'Dépend de composants',
          'dependsOnComponentsCard.emptyMessage':
            "Aucun composant n'est une dépendance de ce composant",
          'dependsOnResourcesCard.title': 'Dépend des ressources',
          'dependsOnResourcesCard.emptyMessage':
            "Aucune ressource n'est une dépendance de ce composant",
          'entityContextMenu.copiedMessage': 'Copié!',
          'entityContextMenu.moreButtonTitle': 'Plus',
          'entityContextMenu.inspectMenuTitle': "Inspecter l'entité",
          'entityContextMenu.copyURLMenuTitle': "Copier l'URL de l'entité",
          'entityContextMenu.unregisterMenuTitle': "Désenregistrer l'entité",
          'entityLabelsCard.title': 'Étiquettes',
          'entityLabelsCard.emptyDescription':
            "Aucune étiquette définie pour cette entité. Vous pouvez ajouter des étiquettes à votre YAML d'entité comme indiqué dans l'exemple ci-dessous:",
          'entityLabelsCard.readMoreButtonTitle': 'En savoir plus',
          'entityLabels.warningPanelTitle': 'Entité non trouvée',
          'entityLabels.ownerLabel': 'Propriétaire',
          'entityLabels.lifecycleLabel': 'Cycle de vie',
          'entityLinksCard.title': 'Liens',
          'entityLinksCard.emptyDescription':
            "Aucun lien défini pour cette entité. Vous pouvez ajouter des liens à votre YAML d'entité comme indiqué dans l'exemple ci-dessous:",
          'entityLinksCard.readMoreButtonTitle': 'En savoir plus',
          'entityNotFound.title': 'Entité non trouvée',
          'entityNotFound.description':
            'Vous voulez nous aider à construire cela? Consultez notre documentation de démarrage.',
          'entityNotFound.docButtonTitle': 'DOCS',
          'deleteEntity.dialogTitle':
            'Êtes-vous sûr de vouloir supprimer cette entité?',
          'deleteEntity.deleteButtonTitle': 'Supprimer',
          'deleteEntity.cancelButtonTitle': 'Annuler',
          'deleteEntity.description':
            "Cette entité n'est référencée par aucun emplacement et ne reçoit donc pas de mises à jour. Cliquez ici pour supprimer.",
          entityProcessingErrorsDescription: "L'erreur ci-dessous provient de",
          entityRelationWarningDescription:
            "Cette entité a des relations avec d'autres entités, qui ne peuvent pas être trouvées dans le catalogue.\n Les entités non trouvées sont: ",
          'hasComponentsCard.title': 'Possède des composants',
          'hasComponentsCard.emptyMessage':
            'Aucun composant ne fait partie de ce système',
          'hasResourcesCard.title': 'Possède des ressources',
          'hasResourcesCard.emptyMessage':
            'Aucune ressource ne fait partie de ce système',
          'hasSubcomponentsCard.title': 'Possède des sous-composants',
          'hasSubcomponentsCard.emptyMessage':
            'Aucun sous-composant ne fait partie de ce composant',
          'hasSystemsCard.title': 'Possède des systèmes',
          'hasSystemsCard.emptyMessage':
            'Aucun système ne fait partie de ce domaine',
          'relatedEntitiesCard.emptyHelpLinkTitle':
            'Apprenez comment changer cela.',
          'systemDiagramCard.title': 'Diagramme du système',
          'systemDiagramCard.description':
            'Utilisez le pincement et le zoom pour vous déplacer dans le diagramme.',
          'systemDiagramCard.edgeLabels.partOf': 'fait partie de',
          'systemDiagramCard.edgeLabels.provides': 'fournit',
          'systemDiagramCard.edgeLabels.dependsOn': 'dépend de',
        },
      }),
  },
});
