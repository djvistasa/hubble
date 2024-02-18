type IUsePaginationProps = {};

type IUsePaginationReturnValues = {
  getNextDataSet: () => void;
  getPreviousDataSet: () => void;
  showNextButton: boolean;
  showPreviousButton: boolean;
};

export type { IUsePaginationProps, IUsePaginationReturnValues };
