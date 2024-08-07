import { createTranslationResource } from '@backstage/core-plugin-api/alpha';
import { catalogReactTranslationRef } from '@backstage/plugin-catalog-react/alpha';

export const catalogReactMessages = createTranslationResource({
  ref: catalogReactTranslationRef,
  translations: {
    fr: () =>
      Promise.resolve({
        default: {
          'catalogFilter.title': 'Filtres',
          'catalogFilter.buttonTitle': 'Filtres',
          'entityKindPicker.title': 'Genre',
          'entityKindPicker.errorMessage':
            "Échec du chargement des types d'entité",
          'entityLifecyclePicker.title': 'Cycle de vie',
          'entityNamespacePicker.title': 'Espace de noms',
          'entityOwnerPicker.title': 'Propriétaire',
          'entityProcessingStatusPicker.title': 'Statut de traitement',
          'entityTagPicker.title': 'Étiquettes',
          'entityPeekAheadPopover.title':
            "Explorez l'entité pour voir toutes les étiquettes.",
          'entityPeekAheadPopover.emailCardAction.title':
            'Envoyer un email à {{email}}',
          'entityPeekAheadPopover.emailCardAction.subTitle': 'mailto {{email}}',
          'entityPeekAheadPopover.entityCardActionsTitle':
            'Afficher les détails',
          'entitySearchBar.placeholder': 'Rechercher',
          'entityTypePicker.title': 'Type',
          'entityTypePicker.errorMessage':
            "Échec du chargement des types d'entité",
          'entityTypePicker.optionAllTitle': 'tout',
          'favoriteEntity.addToFavorites': 'Ajouter aux favoris',
          'favoriteEntity.removeFromFavorites': 'Retirer des favoris',
          'inspectEntityDialog.title': "Inspecteur d'entité",
          'inspectEntityDialog.closeButtonTitle': 'Fermer',
          'inspectEntityDialog.ancestryPage.title': 'Ascendance',
          'inspectEntityDialog.colocatedPage.title': 'Colocalisé',
          'inspectEntityDialog.colocatedPage.description':
            "Ce sont les entités qui sont colocalisées avec cette entité - c'est-à-dire, elles proviennent de la même source de données (par exemple, du même fichier YAML) ou de la même origine (par exemple, l'URL d'enregistrement original).",
          'inspectEntityDialog.colocatedPage.alertNoLocation':
            "L'entité n'avait aucune information de localisation.",
          'inspectEntityDialog.colocatedPage.alertNoEntity':
            "Il n'y avait pas d'autres entités à cet emplacement.",
          'inspectEntityDialog.jsonPage.title': 'Entité en JSON',
          'inspectEntityDialog.jsonPage.description':
            "Voici les données brutes de l'entité telles que reçues du catalogue, au format JSON.",
          'inspectEntityDialog.overviewPage.title': 'Aperçu',
          'inspectEntityDialog.yamlPage.title': 'Entité en YAML',
          'inspectEntityDialog.yamlPage.description':
            "Voici les données brutes de l'entité telles que reçues du catalogue, au format YAML.",
          'unregisterEntityDialog.title':
            'Êtes-vous sûr de vouloir désenregistrer cette entité?',
          'unregisterEntityDialog.cancelButtonTitle': 'Annuler',
          'unregisterEntityDialog.deleteButtonTitle': "Supprimer l'entité",
          'unregisterEntityDialog.deleteEntitySuccessMessage':
            'Entité supprimée {{entityName}}',
          'unregisterEntityDialog.bootstrapState.title':
            "Vous ne pouvez pas désenregistrer cette entité, car elle provient d'une configuration Backstage protégée (emplacement \"{{location}}\"). Si vous pensez qu'il s'agit d'une erreur, veuillez contacter l'intégrateur {{appTitle}}.",
          'unregisterEntityDialog.bootstrapState.advancedDescription':
            "Vous avez la possibilité de supprimer l'entité elle-même du catalogue. Notez que cela ne doit être fait que si vous savez que le fichier du catalogue a été supprimé ou déplacé de son emplacement d'origine. Si ce n'est pas le cas, l'entité réapparaîtra bientôt lors de la prochaine mise à jour effectuée par le catalogue.",
          'unregisterEntityDialog.bootstrapState.advancedOptions':
            'Options avancées',
          'unregisterEntityDialog.onlyDeleteStateTitle':
            "Cette entité ne semble pas provenir d'un emplacement enregistré. Vous avez donc uniquement la possibilité de la supprimer directement du catalogue.",
          'unregisterEntityDialog.unregisterState.title':
            'Cette action désenregistrera les entités suivantes:',
          'unregisterEntityDialog.unregisterState.subTitle':
            "Situé à l'emplacement suivant:",
          'unregisterEntityDialog.unregisterState.description':
            "Pour annuler, il suffit de réenregistrer l'entité dans {{appTitle}}.",
          'unregisterEntityDialog.unregisterState.unregisterButtonTitle':
            "Désenregistrer l'emplacement",
          'unregisterEntityDialog.unregisterState.advancedOptions':
            'Options avancées',
          'unregisterEntityDialog.unregisterState.advancedDescription':
            "Vous avez également la possibilité de supprimer l'entité elle-même du catalogue. Notez que cela ne doit être fait que si vous savez que le fichier du catalogue a été supprimé ou déplacé de son emplacement d'origine. Si ce n'est pas le cas, l'entité réapparaîtra bientôt lors de la prochaine mise à jour effectuée par le catalogue.",
          'unregisterEntityDialog.errorStateTitle':
            'Erreur interne: état inconnu',
          'userListPicker.defaultOrgName': 'Entreprise',
          'userListPicker.personalFilter.title': 'Personnel',
          'userListPicker.personalFilter.ownedLabel': 'Possédé',
          'userListPicker.personalFilter.starredLabel': 'Favori',
          'userListPicker.orgFilterAllLabel': 'Tout',
        },
      }),
  },
});
