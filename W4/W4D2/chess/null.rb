require "singleton"
class Null

    attr_reader :symbol
    include Singleton
    def initialize
        @symbol = "null"
    end

    def inspect
        { "symbol" => @symbol }.inspect
    end
end