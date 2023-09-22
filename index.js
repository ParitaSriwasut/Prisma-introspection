const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const run = async () => {
  try {
    //.findUnique = if found the result will be the object of products (Mostly use)
    // const result = await prisma.product.findUnique({
    //   where: {
    //     id: 8,
    //   },
    // });

    //.findUnique = if not found the result will be null
    // const result = await prisma.product.findUnique({
    //   where: {
    //     id: 2000,
    //   },
    // });

    //.findUniqueOrThrow = if found the result will be the object of products (same as findunique)
    // const result = await prisma.product.findUniqueOrThrow({
    //   where: {
    //     id: 2,
    //   },
    // });

    //.findUniqueOrThrow = if not full will throw the error
    // const result = await prisma.product.findUniqueOrThrow({
    //   where: {
    //     id: 2000,
    //   },
    // });

    //FindFirst : result will be the first product (object)
    // const result = await prisma.product.findFirst({});

    // const result = await prisma.product.findFirs({
    //   where: {
    //     price: {
    //       lt: 10000,
    //     },
    //   },
    // });

    //FindFirstOrThrow : the result will trow null if cannot be found
    // const result = await prisma.product.findFirstOrThrow({
    //   where: {
    //     price: {
    //       lt: 10000,
    //     },
    //   },
    // });

    //findMany : the result also will be the object of products (many)
    // const result = await prisma.product.findMany({});

    //findMny with WHERE condition : the result will be empty array if cannot be found
    // const result = await prisma.product.findMany({
    //   where: {
    //     id: 100,
    //   },
    // });

    //not equal operator (not)
    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: {
    //       not: 4,
    //     },
    //   },
    // });

    //in operator = in ... has values or not (checking)
    // const result = await prisma.user.findMany({
    //   where: {
    //     id: {
    //       in: [10, 11, 12, 22],
    //     },
    //   },
    // });

    //notIn operator in... has values or not (checking)
    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: {
    //       notIn: [2, 4, 6],
    //     },
    //   },
    // });

    //contains operator : checking inside db has the (contains condition) ?
    // const result = await prisma.user.findMany({
    //   where: {
    //     username: {
    //       contains: "r",
    //     },
    //   },
    // });

    //AND operator : if inside the function has been checking 2 condition inside it means the fn will provide the AND operator automatically. (no need to write AND inside)
    // const result = await prisma.product.findMany({
    //   where: {
    //     name: {
    //       startsWith: "i",
    //     },
    //     price: {
    //       gt: 50000,
    //     },
    //   },
    // });

    //OR operator
    // const result = await prisma.product.findMany({
    //   where: {
    //     OR: [{ brandId: 2 }, { brandId: 3 }],
    //   },
    // });

    //And operator : which between case 30000-40000
    // const result = await prisma.product.findMany({
    //   where: {
    //     AND: [
    //       {
    //         price: {
    //           gt: 30000,
    //         },
    //       },
    //       {
    //         price: {
    //           lt: 40000,
    //         },
    //       },
    //     ],
    //   },
    // });

    // const result = await prisma.user.findMany({
    //     select: {
    //         username: true,
    //         id: true,
    //         role: true

    //     }
    // })

    // const result = await prisma.user.findMany({
    //     select: {
    //         username: true,
    //         id: true,
    //         role: true

    //     }
    // })

    //select operator
    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: 6,
    //   },
    //   include: {
    //     product: {
    //       select: {
    //         id: true,
    //         name: true,
    //         price: true,
    //       },
    //     },
    //   },
    // });

    //Join 5 table : by  Nested include operator
    // const result = await prisma.user.findMany({
    //   where: {
    //     id: 2,
    //   },
    //   include: {
    //     order: {
    //       include: {
    //         orderitem: {
    //           include: {
    //             product: {
    //               include: {
    //                 brand: true,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });

    //Select : output will be some attribute (pick some)
    //Include : output will show all of attribute (show all)
    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: 1,
    //   },
    //   select: {
    //     name: true,
    //     product: {
    //       select: {
    //         id: true,
    //         name: true,
    //         price: true,
    //       },
    //     },
    //   },
    // select: {
    //   product: true,
    // },
    //});

    //Nested query : (WHERE)
    // const result = await prisma.brand.findFirst({
    //   where: {
    //     id: 1,
    //   },
    //   include: {
    //     product: {
    //       where: {
    //         price: {
    //           gt: 55000,
    //         },
    //       },
    //     },
    //   },
    // });

    //orderBy = sort by "desc" , "asc"
    //take = take how many / limit
    //offset = skip
    // const result = await prisma.product.findMany({
    //   orderBy: {
    //     price: "desc",
    //   },
    //   take: 5,
    //   skip: 10
    // });

    //aggregate() = _count , _min , _max , _avg , _sum
    // const result = await prisma.user.aggregate({
    //   _count: {
    //     id: true,
    //   },
    //   where: {
    //     role: {
    //       not: "ADMIN",
    //     },
    //   },
    // });

    //groupBy
    //can used with / aggregate() = _count , _min , _max , _avg , _sum
    //gt = grater than
    //lt = less than
    const result = await prisma.product.groupBy({
      by: "brandId",
      _max: {
        price: true,
      },
      having: {
        price: {
          _max: {
            gt: 40000,
          },
        },
      },
    });
    //(JSON.stringify(result, null, 2)) : decorate the row of output.
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.log(err);
  }
};
run();
