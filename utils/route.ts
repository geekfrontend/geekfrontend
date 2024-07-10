export interface Route {
  id: string;
  title: string;
  name: string;
  parent: boolean;
  icon: string;
  link?: string;
  child?: Route[];
}
const routes = [
  {
    id: "1",
    title: "Dasbor",
    name: "dasbor",
    parent: true,
    icon: "dasbor",
    link: "/dashboard",
  },
  {
    id: "2",
    title: "Project",
    name: "project",
    parent: true,
    icon: "project",
    link: "/projects",
  },
  {
    id: "transaksi",
    title: "Transaksi",
    name: "transaksi",
    parent: true,
    icon: "transaksi",
    child: [
      {
        id: "rfq",
        title: "RFQ",
        name: "transaksi.rfq",
        link: "/dashboard/rfq",
        icon: "dot",
      },
      {
        id: "quotation",
        title: "Quotation",
        name: "transaksi.quotation",
        link: "/dashboard/quotation",
        icon: "dot",
      },
      {
        id: "purchase-request",
        title: "Purchase Request",
        name: "transaksi.pr",
        link: "/dashboard/purchase-request",
        icon: "dot",
      },
      {
        id: "purchase-order",
        title: "Purchase Order",
        name: "transaksi.po",
        link: "/dashboard/purchase-order",
        icon: "dot",
      },
      {
        id: "tagihan",
        title: "Tagihan",
        name: "transaksi.tagihan",
        link: "/dashboard/invoice",
        icon: "dot",
      },
      {
        id: "pembayaran",
        title: "Pembayaran",
        name: "transaksi.pembayaran",
        link: "/dashboard/payment",
        icon: "dot",
      },
    ],
  },
];

export { routes };
