# htmlpage 内容区 UI 规范

> 基于 benefit-stock.html、activity-management.html、cost-statistics.html 等页面提取的设计规范

## 一、整体结构

```
┌─────────────────────────────────────────────────────────────┐
│  页面标题区（标题 + 功能说明）                               │
├─────────────────────────────────────────────────────────────┤
│  Tab 切换区（可选）                                          │
├─────────────────────────────────────────────────────────────┤
│  01 核心指标区（指标卡片组）                                 │
├─────────────────────────────────────────────────────────────┤
│  02 筛选区（搜索表单 + 快捷筛选标签）                        │
├─────────────────────────────────────────────────────────────┤
│  批量操作按钮区（右对齐）                                    │
├─────────────────────────────────────────────────────────────┤
│  03 列表区（数据表格）                                       │
├─────────────────────────────────────────────────────────────┤
│  04 分析区（可选，多维度分析）                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 二、页面标题区

### 规范
- 标题字号：`text-sm`（14px），font-bold，颜色 `text-slate-800`
- 功能说明：`text-[10px]`，颜色 `text-slate-400`，位于标题下方

### 代码示例
```html
<div class="mb-5">
  <h2 class="text-sm font-bold text-slate-800">页面标题</h2>
  <p class="text-[10px] text-slate-400 mt-1">页面功能说明文字</p>
</div>
```

---

## 三、区域标题规范

### 规范
- 区域编号：`px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 font-medium rounded`
- 区域标题：`text-[11px] font-medium text-slate-700`
- 区域说明：`text-[10px] text-slate-400`

### 代码示例
```html
<div class="flex items-center gap-2 mb-2">
  <span class="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 font-medium rounded">01</span>
  <span class="text-[11px] font-medium text-slate-700">核心指标区</span>
</div>
<p class="text-[10px] text-slate-400">区域功能说明文字</p>
```

---

## 四、指标卡片区

### 规范
- 布局：`grid grid-cols-5 gap-3` 或 `grid grid-cols-4 gap-4`
- 卡片样式：`border border-slate-300 bg-white rounded-lg p-4`
- 标签字号：`text-[10px] text-slate-400`
- 数值字号：`text-lg font-bold`，颜色根据含义区分
- 辅助信息：`text-[10px]`，颜色 `text-emerald-500`（正增长）或 `text-red-500`（负增长）

### 代码示例
```html
<div class="grid grid-cols-5 gap-3 mb-5">
  <div class="border border-slate-300 bg-white rounded-lg p-4">
    <div class="text-[10px] text-slate-400 mb-1">指标名称</div>
    <div class="text-lg font-bold text-slate-700">1,286</div>
    <div class="text-[10px] text-emerald-500 mt-1">↑ 12.5% 同比</div>
  </div>
  <!-- 更多卡片... -->
</div>
```

---

## 五、筛选区

### 规范
- 外框：`border border-slate-300 bg-white rounded-lg`
- 标题行：`px-4 py-3 border-b border-slate-200`
- 表单行：`flex flex-wrap gap-4 items-end mt-3`
- 表单项标签：`text-[10px] text-slate-500 block mb-1`
- 输入框：`border border-slate-300 rounded px-3 py-1.5 text-[11px] w-xx focus:outline-none focus:border-blue-400`
- 主按钮：`px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-medium`
- 次按钮：`px-4 py-1.5 border border-slate-300 rounded text-[11px] text-slate-600 hover:bg-slate-50`

### 快捷筛选标签
```html
<div class="flex gap-2 mt-3">
  <span class="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] rounded-full cursor-pointer">全部</span>
  <span class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-full cursor-pointer hover:bg-slate-50">条件1</span>
  <span class="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] rounded-full cursor-pointer hover:bg-slate-50">条件2</span>
</div>
```

---

## 六、批量操作按钮区

### 规范
- 布局：`flex items-center justify-end gap-2 mb-3`
- 主操作按钮：`px-3 py-1.5 bg-blue-600 text-white rounded text-[10px] font-bold`
- 次操作按钮：`px-3 py-1.5 border border-slate-300 text-slate-700 rounded text-[10px] font-bold`
- 警告按钮：`px-3 py-1.5 border border-amber-300 text-amber-700 rounded text-[10px] font-bold`

### 代码示例
```html
<div class="flex items-center justify-end gap-2 mb-3">
  <button class="px-3 py-1.5 bg-blue-600 text-white rounded text-[10px] font-bold">批量操作</button>
  <button class="px-3 py-1.5 border border-slate-300 text-slate-700 rounded text-[10px] font-bold">导出</button>
</div>
```

---

## 七、列表区

### 规范
- 外框：`mk-list-panel` 类（已在 common.css 定义）
- 表头：`bg-slate-50` 背景，`text-slate-500` 颜色，`text-xs` 字号
- 表格行：hover 效果 `hover:bg-slate-50`
- 操作按钮：使用文字链接样式，`text-blue-600 text-[10px] font-bold cursor-pointer`

### 代码示例
```html
<div class="mk-list-panel">
  <div class="mk-panel-header">
    <div class="mk-panel-title">列表标题</div>
  </div>
  <table class="w-full text-xs">
    <thead class="bg-slate-50">
      <tr>
        <th class="py-3 px-3 text-left text-slate-500 font-medium">列标题</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-slate-50 border-b border-slate-100">
        <td class="py-3 px-3">数据</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 八、分析区（多维度分析）

### 规范
- 使用 grid 布局：`grid grid-cols-3 gap-4` 或 `grid grid-cols-2 gap-4`
- 每个分析卡片：`border border-slate-300 bg-white rounded-lg`
- 卡片标题行：`px-4 py-3 border-b border-slate-200`
- 进度条：`w-full h-2 bg-slate-100 rounded` + `h-2 bg-blue-500 rounded`

### 代码示例
```html
<div class="grid grid-cols-3 gap-4 mb-5">
  <div class="border border-slate-300 bg-white rounded-lg">
    <div class="px-4 py-3 border-b border-slate-200">
      <span class="text-[11px] font-medium text-slate-700">分析维度1</span>
    </div>
    <div class="p-4">
      <!-- 分析内容 -->
    </div>
  </div>
</div>
```

---

## 九、Tab 切换区

### 规范
- 外框：`border-b border-slate-200 mb-4`
- Tab 按钮：`px-3 py-1.5 text-[13px] font-bold`
- 激活状态：`text-blue-600 border-b-2 border-blue-600`
- 非激活状态：`text-slate-400 hover:text-slate-600`

### 代码示例
```html
<div class="border-b border-slate-200 mb-4">
  <button class="px-3 py-1.5 text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 cursor-pointer">Tab1</button>
  <button class="px-3 py-1.5 text-[13px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer">Tab2</button>
</div>
```

---

## 十、状态标签

### 规范
| 状态 | 样式类 |
|------|--------|
| 正常/成功 | `bg-emerald-100 text-emerald-700` |
| 警告 | `bg-amber-100 text-amber-700` |
| 错误/危险 | `bg-red-100 text-red-700` |
| 信息 | `bg-blue-100 text-blue-700` |
| 默认/禁用 | `bg-slate-100 text-slate-500` |

### 代码示例
```html
<span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">正常</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold">异常</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">预警</span>
```

---

## 十一、字号规范

| 用途 | 字号 |
|------|------|
| 页面标题 | `text-sm` (14px) |
| 区域标题 | `text-[11px]` |
| 区域说明 | `text-[10px]` |
| 表单项标签 | `text-[10px]` |
| 按钮文字 | `text-[10px]` 或 `text-[11px]` |
| 表格内容 | `text-xs` (12px) |
| 指标数值 | `text-lg` 或 `text-xl` |

---

## 十二、间距规范

| 位置 | 间距 |
|------|------|
| 区域之间 | `mb-5` |
| 标题与内容 | `mb-2` 或 `mb-3` |
| 卡片之间 | `gap-3` 或 `gap-4` |
| 表单项之间 | `gap-4` |
| 按钮之间 | `gap-2` |

---

## 十三、不需要调整的页面

以下页面已符合规范，无需调整：
- overview.html
- workbench.html
- benefit-stock.html
- activity-management.html
- rule-management.html
- cost-statistics.html
- scene-management.html
- redemption.html
- grant-exception.html
- component-health.html
- thirdparty-settlement.html

---

## 十四、需要调整的页面

需要按照本规范调整内容区结构的页面：
- index.html（首页）
- equity-list.html（权益管理）
- equity-category.html（权益品类管理）
- supplier-list.html（供应商管理）
- inventory-alert.html（库存预警）
- channel-list.html（渠道管理）
- event-list.html（事件管理）
- operation-customers.html（客户列表）
- operation-blacklist.html（权益黑名单）
- operation-recovery.html（权益回收）
- operation-reissue.html（权益补发）
- reconcile-internal.html（行内权益核销对账）
- reconcile-thirdparty.html（第三方权益核销对账）
- reconcile-physical.html（实物奖品核销对账）
- reconcile-settlement.html（权益成本结算）
- analysis-direct.html（直投成效分析）
- analysis-overview.html（重要数据分析）
- analysis-report.html（权益报表）