type IUsePaginationProps = {};

type IUsePaginationReturnValues = {
  getNextDataSet: () => void;
  getPreviousDataSet: () => void;
  disableNextButton: boolean;
  disablePreviousButton: boolean;
};

export type { IUsePaginationProps, IUsePaginationReturnValues };
