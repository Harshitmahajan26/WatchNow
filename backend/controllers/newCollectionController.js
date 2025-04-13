// backend/controllers/newCollectionController.js
import new_collections from '../Assets/new_collection.js';

export const fetchNewCollections = (req, res) => {
  res.json(new_collections);
};
