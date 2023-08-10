import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useIntl } from "react-intl";

export default function ListingSearch({
  setSearchText,
}: {
  setSearchText: (text: string) => void;
}) {
  const { formatMessage } = useIntl();
  return (
    <>
      <TextField
        onChange={(event) => setSearchText(event.target.value)}
        id="search-input"
        label={formatMessage({ id: "search-placeholder" })}
        className="w-full"
      />
      <Search className="mt-4 mr-2" />
    </>
  );
}
