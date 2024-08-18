import PropTypes from "prop-types";
import {
  Datagrid,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  useRecordContext,
  EditButton,
} from "react-admin";

const UrlField = ({ source }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} target="_blank">
      View
    </a>
  );
};

export const PosterList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="title" />
      <NumberField source="width" />
      <NumberField source="height" />
      <NumberField source="price" />
      <ImageField
        source="thumbnail"
        sx={{
          "& img": { maxWidth: 100, maxHeight: 100, objectFit: "contain" },
        }}
      />
      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" />
      <EditButton />
    </Datagrid>
  </List>
);

UrlField.propTypes = {
  source: PropTypes.string.isRequired,
};

export default PosterList;
