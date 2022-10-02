type requireContextType = __WebpackModuleApi.RequireContext
function importAll(requireContext: requireContextType): void {
  requireContext.keys().forEach(requireContext)
}
try {
  importAll(require.context('./icons/', true, /\.svg$/));
} catch (error) {
  // 注释的目的：防止在 test 环境下没有 require.context
  // console.log(error)
}
