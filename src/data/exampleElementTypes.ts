export default `# Existing ElementTypes:
# none, string, boolean, double, integer, list_string, item, material, potioneffect, enchantment, list_item, rewardtype, pricetype
shop:
#  configKey: shop Optional: Default configKey is path name
  type: complex
  children:
    ShopName:
      type: existing:string
    DisplayName:
      type: existing:string
    Command:
      type: existing:string
    'signs.text':
      type: existing:string
    'signs.NeedsPermissionToCreateSign':
      type: existing:boolean
    # ShopItemList
    shopitemlist:
      type: complexlist
      # todo: function um text aus key und objekt zu extrahieren
      elements:
        # ShopItem
        shopitem:
          type: complex
          children:
            MenuItem:
              type: existing:item
             RewardType: 
               type: existing:rewardtype
             Reward:
               type: dependent
               dependency: RewardType
               map:
                 bungeecordcommand: list_string
                 bungeecordserver: string
                 close: none
                 command: list_string
                 custom: none
                 enchantment: string
                 exp: integer
                 item: list_item
                 itemall: item
                 money: double
                 nothing: none
                 permission: list_string
                 playercommand: list_string
                 playercommandop: list_string
                 points: double
                 shop: string
                 shoppage: string
             PriceType: 
               type: existing:pricetype
             Price:
               type: dependent
               dependency: PriceType
               map:
                 money: double
                 exp: integer
                 item: list_item
                 itemall: item
                 money: double
                 nothing: none
                 points: double
            Message:
              type: existing:string
            InventoryLocation:
              type: existing:integer
            ExtraPermission:
              type: existing:string
              optional: true`